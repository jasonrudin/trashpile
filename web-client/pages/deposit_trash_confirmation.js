import Head from "next/head";
import DepositTrashView from "../components/DepositTrashView";
import { Header } from '../components/header/Header';

function DepositTrashConfirmationPage() {
    return (
        <div className="bg-gray-200">
        <Head>
          <title>Department of Sanitation</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Link
        href = "/deposit_trash"
        >
            <a>Testing</a>
        </Link>
        <DepositTrashView/>
        <footer className = "h-48 bg-gradient-to-t from-black to-gray-700"></footer>
      </div>
    );
}

export default DepositTrashConfirmationPage;