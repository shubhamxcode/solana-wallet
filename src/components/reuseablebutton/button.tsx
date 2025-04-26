import * as React from "react";
import * as web3 from "@solana/web3.js";
import {
    ConnectionProvider,
    WalletProvider,
    useConnection,
    useWallet
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";

// ----- WalletConnection Component -----
function WalletConnection() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    React.useEffect(() => {
        const getInfo = async () => {
            try {
                if (connection && publicKey) {
                    await connection.getAccountInfo(publicKey);
                }
            } catch (error) {
                console.log("There is no public key");
            }
        };
        getInfo();
    }, [connection, publicKey]); // ✅ added publicKey also in dependency

    return (
        <div>
            <WalletMultiButton />
        </div>
    );
}

// ----- Main Button Component -----
function Button() {
    const endpoint = web3.clusterApiUrl("devnet");
    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletConnection />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default Button;
