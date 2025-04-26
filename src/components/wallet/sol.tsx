// imports methods relevant to the react framework
import * as React from "react";
// library we use to interact with the solana json rpc api
import * as web3 from "@solana/web3.js";
// allows us access to methods and components which give us access to the solana json rpc api and user's wallet data
import * as walletAdapterReact from "@solana/wallet-adapter-react";
// allows us to choose from the available wallets supported by the wallet adapter
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
// imports a component which can be rendered in the browser
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
// applies the styling to the components which are rendered on the browser
import ("@solana/wallet-adapter-react-ui/styles.css");
// imports methods for deriving data from the wallet's data store
import { useConnection, useWallet } from "@solana/wallet-adapter-react";


function solanawrapper(){
  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];
  return(
    <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
    <walletAdapterReact.WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Sol />
        </WalletModalProvider>
    </walletAdapterReact.WalletProvider>
  </walletAdapterReact.ConnectionProvider>
  )
}
function Sol() {
  const [balance, setbalance] = React.useState<null | number>(0);
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  React.useEffect(() => {
    const getInfo = async () => {
      try {
        if (connection && publicKey) {
          const Info = await connection.getAccountInfo(publicKey);
          setbalance(Info!.lamports / web3.LAMPORTS_PER_SOL);
        }
      } catch (error) {
        console.log("there is no public key ");
      }
    };
    getInfo();
  }, [connection, publicKey]);

  return (
    <>
            <main className="min-h-screen text-white bg-black">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 ">
                <div className="col-span-1 lg:col-start-2 lg:col-end-4 rounded-lg bg-[#2a302f] h-60 p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold">account info ✨</h2>
                    <WalletMultiButton className="!bg-helius-orange !rounded-xl hover:!bg-[#161b19] transition-all duration-200" />
                  </div>
                  <div>
                    <ul className="p-2">
                      <li className="flex justify-between">
                        <p className="tracking-wider">Wallet is connected...</p>
                        <p className="text-helius-orange italic font-semibold">
                          {publicKey ? "yes" : "no"}
                        </p>
                      </li>

                      <li className="text-sm mt-4 flex justify-between">
                        <p className="tracking-wider">Balance...</p>
                        <p className="text-helius-orange italic font-semibold">
                          {balance}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
    </>
  );
}

export default solanawrapper;
