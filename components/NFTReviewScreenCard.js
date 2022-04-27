import Image from "next/image";
import { useState } from "react";

function NFTReviewScreenCard(props) {
    let nft = props.nft;

    return (
        <div className={`flex h-[156px] my-4`}>
            <div className="w-[156px]">
            <img
                src = {nft.image}
                className="object-contain h-[156px] w-[156px]"
                width= "100%"
                height = "100%"
            />
            </div>
            <div className="relative ml-2">
                <h3 className="font-bold">{nft.name}</h3>
                <span className="text-sm hover:cursor-pointer underline underline-offset-1 hover:text-cyan-400"
                    onClick={() => props.removeNFTFromTrash(nft)}>
                    Remove
                </span>
            </div>
        </div>
    );
}

export default NFTReviewScreenCard;