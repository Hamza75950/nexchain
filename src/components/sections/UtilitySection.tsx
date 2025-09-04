import React from "react";
import CardComponent from "../common/CardComponent";

function UtilitySection() {
  const utilityData = [
    {
      imageUrl: "/utility1.svg",
      title: "Instant transactions with low fees",
      para: "When you buy NEX coin, you can use it to pay transaction fees for fund transfers and interactions with smart contracts. The fees are thus reduced, and the network can operate without interruptions due to special incentives for validators.",
    },
    {
      imageUrl: "/utility2.svg",
      title: "NEX Coins Staking: Passive income and network support",
      para: "It is possible to stake your NEX coins in smart contracts and participate in the hybrid consensus, which secures the network and guarantees regular rewards for investors.",
    },
    {
      imageUrl: "/utility3.svg",
      title: "Decentralized management: a voice that counts",
      para: "If you participate in Nexchain presale and purchase a token, you become a rightful member of the platform’s administration. You get the right to vote on updates, protocols, and resource allocation.",
    },
    {
      imageUrl: "/utility4.svg",
      title: "Paying for AI services and models development",
      para: "The NEX crypto token can be used as a means of payment for various AI services, including network training and using analytic models in smart contracts.",
    },
    {
      imageUrl: "/utility5.svg",
      title: "Income distribution: passive benefits for holders",
      para: "We distribute 10% of the income among the NEX holders who keep their assets in DeFi wallets. This encourages beneficial long-term participation in the ecosystem.",
    },
    {
      imageUrl: "/utility6.svg",
      title: "A universal means of payment in the Web3",
      para: "Additionally, holders can use their NEX crypto ICO tokens to make transactions within Nexchain-based dApps, ranging from microtransactions in games to purchasing AI-generated content and digital items.",
    },
  ];
  return (
    <section className="sectionContainer bg-white">
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">NEX Coin Utility</h2>

          <p className="sectionDes">
            NEX token is a universal solution for instant transactions, staking,
            government, and many more.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-full mt-8">
            {utilityData.map((item, index) => (
              <CardComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UtilitySection;
