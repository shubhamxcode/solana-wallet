import { Link } from "react-router-dom";

const cardData = [
  {
    id: "01",
    title: "tokens",
    description:
      "You will use the @solana/spl-token library to create Token Mints, create SPL-tokens, and burn tokens.",
    link: "/connectwallet",
  },
  {
    id: "02",
    title: "Faucet",
    description:
      "You will build a SOLfoucet that you will use to fund Your Phnatom Browser wallet.",
    link: "/fund",
  },
  {
    id: "03",
    title: "programs",
    description:
      "Understand how to deploy and interact with Solana smart contracts (programs).",
    link: "/programs",
  },
  {
    id: "04",
    title: "nfts",
    description:
      "Use Metaplex to create, mint, and transfer NFTs on the Solana blockchain.",
    link: "/nfts",
  },
  {
    id: "05",
    title: "staking",
    description:
      "Learn how to delegate tokens, interact with validators, and earn staking rewards.",
    link: "/staking",
  },
];

const Card = ({ id, title, description, link }: any) => (
  <div className="bg-[#1e1e1e] text-white p-8 rounded-2xl border border-gray-700 w-[320px] shadow-md 
    hover:shadow-orange-500/30 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
    <div className="flex justify-between items-start">
      <span className="text-orange-500 font-semibold text-base">{id}</span>
      <span className="text-white font-mono text-lg">{title}</span>
    </div>
    <p className="text-gray-300 mt-6 text-base font-mono leading-relaxed">
      {description}
    </p>
    <div className="flex justify-between items-center mt-8">
      <Link to={link} className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
        starter
      </Link>
      <span className="text-gray-400 text-sm font-mono">requirements &lt;/&gt;</span>
    </div>
  </div>
);

const DarkCardsRow = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="flex flex-row gap-8 flex-wrap justify-center">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default DarkCardsRow;
