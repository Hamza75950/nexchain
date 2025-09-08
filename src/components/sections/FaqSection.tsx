"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Why Join the Nexchain Crypto Presale Now?",
    answer:
      "Among all crypto presales in the blockchain sector, Nexchain offers an exclusive solution, which is an ecosystem backed entirely by AI technology. This makes it reliable, adaptable, highly secure, and prone to growth and evolution. Our cryptocurrency presale gives enthusiasts exclusive access to the full potential of NEX. Being a top presale crypto, NEX coin is available for sale in phases, and each stage comes with exclusive bonuses.",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment required is $20, which grants you access to participate in the cryptocurrency pre-sale. Kindly note that, like with all crypto pre sales, the cost changes with every stage.",
  },
  {
    question: "When will NEX tokens be listed on exchanges?",
    answer:
      `Nexchain will be listed after we raise $50 million during the presale. Once we reach that milestone, we'll immediately announce the exact date and the exchanges.`,
  },
  {
    question: "What is the NEX coin?",
    answer:
      "The NEX coin is a revolutionary cryptocurrency that is fully powered by AI for security, transparency, and efficiency. At Nexchain, you can participate in our tokens presale and be among the first people to test the NEX coin’s potential.",
  },
  {
    question: "How to Get in Touch with Nexchain?",
    answer:
      "On our official website (www.nexchain.ai), you can find a Support contact form and fill it out. There is also a way to contact us through our Telegram community. Don’t hesitate to refer to us if you have any questions about the token, network, or the process of coin purchasing through the crypto token presale.",
  },
  {
    question: "How does Nexchain ensure network security?",
    answer:
      "Nexchain implements such security measures as post-quantum-era cryptography, AI-based protection, and self-regenerating mechanisms that isolate malfunctioning nodes. The decentralized architecture of the Nexchain blockchain eliminates single points of failure, making the network resilient to attacks.",
  },
  {
    question: "How is network protection funded?",
    answer:
      "We allocate a part of the coin supply and payment fees to fund AI modules for anomaly detection and attack prevention. There is a reward system in place for investors who help secure the network.",
  },
  {
    question: "How does cross-chain interaction work?",
    answer:
      "The NEX network supports cross-chain bridges that allow assets to be transferred securely and transparently between blockchains. The NEX coin can serve as a deposit or a settlement asset.",
  },
  {
    question: "How is data stored in Nexchain?",
    answer:
      "We offer decentralized storage for AI models and large data volumes. Users pay for storage and access with Nexchain tokens.",
  },
  {
    question: "How do validators and nodes earn rewards?",
    answer:
      "Nodes that support the network’s infrastructure (validating transactions, participating in consensus, and storing data) receive rewards in NEX coin, encouraging decentralization and stable network performance.",
  },
  {
    question: "When will the NEX token launch and Nexchain listing take place?",
    answer:
      "The listing is scheduled after the Nexchain presale is complete, targeting a total raise of $50M. The estimated timeframe is Q4 2025 – Q1 2026.",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sectionContainer  bg-white">
      <div className=" sectionContainerSecondary">
        <div className="box-border mb-8">
          <h2 className="sectionHeading">Frequently Asked Questions</h2>
        </div>
        <div className="flex m-auto gap-4 flex-col">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-lg border transition-colors duration-300 pt-4 pr-4 pb-[14px] pl-8 ${
                  isActive
                    ? "bg-[#222d25] border-[#222d25] text-white"
                    : "bg-white border-gray-200 text-black"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left md:text-2xl text-base leading-[1.4] tracking-[-0.045em] font-normal"
                >
                  {faq.question}
                  <div
                    className={`lg:w-12 lg:h-12 md:w-8 md:h-8 w-7 h-7 rounded-full flex justify-center items-center ${
                      isActive ? "bg-white" : "bg-black"
                    }`}
                  >
                    {isActive ? (
                      <Minus className="text-black" />
                    ) : (
                      <Plus className="text-white" />
                    )}
                  </div>
                </button>

                {/* Answer with animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className=" py-4 text-sm leading-[140%]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
