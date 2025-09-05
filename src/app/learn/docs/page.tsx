import DocCard from "@/components/common/DocCard";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DocsPage() {
  const docsData = [
    {
      imageUrl: "/doc1.svg",
      title: "GitBook",
      des: "GitBook helps teams organize information efficiently, making it ideal for technical guides, project docs, and knowledge bases.",
      buttonName: "Learn More",
      link: "https://nexchain.gitbook.io/nexchain",
    },
    {
      imageUrl: "/doc2.svg",
      title: "Github",
      des: "GitHub is a leading platform for version control and collaboration, allowing developers to host, manage, and share code efficiently. It streamlines project workflows, supports teamwork",
      buttonName: "Learn More",
      link: "https://github.com/Nexchain",
    },
    {
      imageUrl: "/doc3.svg",
      title: "Whitepaper",
      des: "A whitepaper is a detailed document that outlines the vision, technology, and use case of a project, often used in crypto and blockchain industries.",
      buttonName: "Learn More",
      link: "https://nexchain.ai/documents/Whitepaper-Nexchain.pdf",
    },
  ];
  return (
    <>
      <HeroSection
        heading={`Technical Papers`}
        paragraph={`Dive into our extensive resources to begin building and contributing to the future of AI-powered \n blockchain technology.`}
        bottomButton={true}
        bottomCard={false}
      />
      <section className="max-w-full bg-white py-[100px]">
        <div className="max-w-[1360px] m-auto px-[15px]">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {docsData.map((item, index) => (
              <DocCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DocsPage;
