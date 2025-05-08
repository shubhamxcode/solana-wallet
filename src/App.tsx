import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home/Home";
import Layout from "./layout";
import Wallet from "../src/components/wallet/sol";
import Fund from "./components/Foucet/foucet";
import { useMemo } from "react";
import Navbar from "./components/Navbar/nav";
import Sendsol from "./components/sendsolana/sendsol";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// Make sure to import the default styles
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  // Define the network (devnet, testnet, or mainnet-beta)
  const network = "devnet";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Set up your wallet adapters
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/connectwallet" element={<Wallet />} />
              <Route path="/fund" element={<Fund />} />
              <Route path="/sendsol" element={<Sendsol />} />
            </Route>
          </Routes>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
