
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-black text-white">
      <Link to='/' className="text-lg font-bold">Solana dApp</Link>
      <WalletMultiButton />
    </nav>
  );
};

export default Navbar;
