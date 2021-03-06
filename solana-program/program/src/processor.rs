//! Program state processor

use crate::{
    error::TrashpileError,
    instruction::{
        Dump, TrashpileInstruction,
    }
};
use num_traits::FromPrimitive;
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    decode_error::DecodeError,
    entrypoint::ProgramResult,
    msg,
    program::{invoke, invoke_signed},
    program_error::PrintProgramError,
    pubkey::Pubkey,
};
use spl_associated_token_account::get_associated_token_address;

/// Program state handler.
pub struct Processor {}
impl Processor {
    /// Processes an [Instruction](enum.Instruction.html).
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        input: &[u8]
    ) -> ProgramResult {
        let instruction = TrashpileInstruction::unpack(input)?;
        match instruction {
            TrashpileInstruction::Dump(Dump { amount }) => {
                msg!("Instruction: Dump");
                Self::process_dump(program_id, accounts, amount)
            }
        }
    }

    /// Processes an [Dump](enum.Instruction.html).
    pub fn process_dump(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        amount: u64,
    ) -> ProgramResult {
        let account_info_iter = &mut accounts.iter();
        let token_to_dump_mint = next_account_info(account_info_iter)?;
        let token_to_dump_owner = next_account_info(account_info_iter)?;
        let token_to_dump_src = next_account_info(account_info_iter)?;
        let token_to_dump_dest = next_account_info(account_info_iter)?;
        let trash_token_mint = next_account_info(account_info_iter)?;
        let trash_token_mint_authority = next_account_info(account_info_iter)?;
        let trash_token_dest = next_account_info(account_info_iter)?;
        let token_program = next_account_info(account_info_iter)?;

        /* checks */
        if amount <= 0 {
            return Err(TrashpileError::InvalidDumpAmount.into());
        }
        
        let associated_token_address = get_associated_token_address(
            program_id,
            token_to_dump_mint.key
        );
        if token_to_dump_dest.key != &associated_token_address {
            return Err(TrashpileError::InvalidDumpDestination.into());
        }

        let trash_token_mint_authority_seeds = "$TRASH".as_bytes();
        let (expected_trash_token_mint_authority_address,
             trash_token_mint_authority_bump_seed) = Pubkey::find_program_address(
                &[&trash_token_mint_authority_seeds[..]], 
                program_id
        );
        if trash_token_mint_authority.key != &expected_trash_token_mint_authority_address {
            return Err(TrashpileError::InvalidTrashTokenMintAuthority.into());
        }

        /* transfer token_to_dump to program */
        let dump_ix = spl_token::instruction::transfer(
            token_program.key,
            token_to_dump_src.key,
            token_to_dump_dest.key,
            token_to_dump_owner.key,
            &[],
            amount,
        )?;
        invoke(
            &dump_ix,
            &[token_to_dump_src.clone(),
              token_to_dump_dest.clone(),
              token_to_dump_owner.clone()]
        )?;

        /* mint and return trash token */
        let mint_signature_seeds = [
            &trash_token_mint_authority_seeds[..], 
            &[trash_token_mint_authority_bump_seed]
        ];
        let mint_ix = spl_token::instruction::mint_to(
            token_program.key,
            trash_token_mint.key,
            trash_token_dest.key,
            trash_token_mint_authority.key,
            &[],
            1000000000,
        )?;
        invoke_signed(
            &mint_ix,
            &[trash_token_mint.clone(),
              trash_token_dest.clone(),
              trash_token_mint_authority.clone()],
            &[&mint_signature_seeds[..]]
        )?;

        Ok(())
    }
}

impl PrintProgramError for TrashpileError {
    fn print<E>(&self)
    where
        E: 'static + std::error::Error + DecodeError<E> + PrintProgramError + FromPrimitive,
    {
        match self {
            TrashpileError::InvalidDumpAmount => {
                msg!("Error: dump amount must be greater than 0")
            },
            TrashpileError::InvalidDumpDestination => {
                msg!("Error: dump destination must program's associated token account")
            },
            TrashpileError::InvalidInstruction => {
                msg!("Error: InvalidInstruction")
            },
            TrashpileError::InvalidTrashTokenMintAuthority => {
                msg!("Error: trash token mint authority isn't expected PDA")
            },
        }
    }
}