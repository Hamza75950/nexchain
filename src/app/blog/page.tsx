"use client";
import React, { useState } from "react";
import BreadcrumbComponent from "../../components/common/BreadcrumbComponent";
import Image from "next/image";
import CardComponent from "@/components/common/CardComponent";

function BlogPage() {
  const blogData = [
    {
      imageUrl: "/b1.webp",
      title: "Best Tokenomics in Crypto for 2025",
      para: "Explore top crypto projects with strong tokenomics in 2025 and see how smart token design drives growth and sustainability.",
      dateTime: "August 25, 2025 / 9 min",
      button: true,
    },
    {
      imageUrl: "/b2.webp",
      title:
        "Launchpad Crypto List & 11 Best IDO Platforms for Crypto Projects",
      para: "Find trusted crypto launchpads and explore top IDO platforms for early-stage blockchain investments.",
      dateTime: "August 20, 2025 / 20 min",
      button: true,
    },
    {
      imageUrl: "/b3.webp",
      title: "Top DeFi Token Presales to Watch in 2025",
      para: "Explore top DeFi token presales in 2025 and discover early access to high-potential crypto projects.",
      dateTime: "August 15, 2025 / 7 min",
      button: true,
    },
    // 🔥 Add all your other cards here (same as before)
    {
      imageUrl: "/b1.webp",
      title: "Best Tokenomics in Crypto for 2025",
      para: "Explore top crypto projects with strong tokenomics in 2025 and see how smart token design drives growth and sustainability.",
      dateTime: "August 25, 2025 / 9 min",
      button: true,
    },
    {
      imageUrl: "/b2.webp",
      title:
        "Launchpad Crypto List & 11 Best IDO Platforms for Crypto Projects",
      para: "Find trusted crypto launchpads and explore top IDO platforms for early-stage blockchain investments.",
      dateTime: "August 20, 2025 / 20 min",
      button: true,
    },
    {
      imageUrl: "/b3.webp",
      title: "Top DeFi Token Presales to Watch in 2025",
      para: "Explore top DeFi token presales in 2025 and discover early access to high-potential crypto projects.",
      dateTime: "August 15, 2025 / 7 min",
      button: true,
    },
    {
      imageUrl: "/b1.webp",
      title: "Best Tokenomics in Crypto for 2025",
      para: "Explore top crypto projects with strong tokenomics in 2025 and see how smart token design drives growth and sustainability.",
      dateTime: "August 25, 2025 / 9 min",
      button: true,
    },
    {
      imageUrl: "/b2.webp",
      title:
        "Launchpad Crypto List & 11 Best IDO Platforms for Crypto Projects",
      para: "Find trusted crypto launchpads and explore top IDO platforms for early-stage blockchain investments.",
      dateTime: "August 20, 2025 / 20 min",
      button: true,
    },
    {
      imageUrl: "/b3.webp",
      title: "Top DeFi Token Presales to Watch in 2025",
      para: "Explore top DeFi token presales in 2025 and discover early access to high-potential crypto projects.",
      dateTime: "August 15, 2025 / 7 min",
      button: true,
    },
    {
      imageUrl: "/b1.webp",
      title: "Best Tokenomics in Crypto for 2025",
      para: "Explore top crypto projects with strong tokenomics in 2025 and see how smart token design drives growth and sustainability.",
      dateTime: "August 25, 2025 / 9 min",
      button: true,
    },
    {
      imageUrl: "/b2.webp",
      title:
        "Launchpad Crypto List & 11 Best IDO Platforms for Crypto Projects",
      para: "Find trusted crypto launchpads and explore top IDO platforms for early-stage blockchain investments.",
      dateTime: "August 20, 2025 / 20 min",
      button: true,
    },
    {
      imageUrl: "/b3.webp",
      title: "Top DeFi Token Presales to Watch in 2025",
      para: "Explore top DeFi token presales in 2025 and discover early access to high-potential crypto projects.",
      dateTime: "August 15, 2025 / 7 min",
      button: true,
    },
    {
      imageUrl: "/b2.webp",
      title:
        "Launchpad Crypto List & 11 Best IDO Platforms for Crypto Projects",
      para: "Find trusted crypto launchpads and explore top IDO platforms for early-stage blockchain investments.",
      dateTime: "August 20, 2025 / 20 min",
      button: true,
    },
    {
      imageUrl: "/b3.webp",
      title: "Top DeFi Token Presales to Watch in 2025",
      para: "Explore top DeFi token presales in 2025 and discover early access to high-potential crypto projects.",
      dateTime: "August 15, 2025 / 7 min",
      button: true,
    },
    {
      imageUrl: "/b1.webp",
      title: "Best Tokenomics in Crypto for 2025",
      para: "Explore top crypto projects with strong tokenomics in 2025 and see how smart token design drives growth and sustainability.",
      dateTime: "August 25, 2025 / 9 min",
      button: true,
    },
    {
      imageUrl: "/b2.webp",
      title:
        "Launchpad Crypto List & 11 Best IDO Platforms for Crypto Projects",
      para: "Find trusted crypto launchpads and explore top IDO platforms for early-stage blockchain investments.",
      dateTime: "August 20, 2025 / 20 min",
      button: true,
    },
    {
      imageUrl: "/b3.webp",
      title: "Top DeFi Token Presales to Watch in 2025",
      para: "Explore top DeFi token presales in 2025 and discover early access to high-potential crypto projects.",
      dateTime: "August 15, 2025 / 7 min",
      button: true,
    },
  ];

  // 🔥 Pagination logic
  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <section className="py-[100px] max-w-[100vw] bg-[#fafafa]">
      <div className="max-w-[1390px] flex flex-col gap-[32px] m-auto px-[15px] ">
        <BreadcrumbComponent />
        {/* Banner Section */}
        <div className="bg-[#e8e8e8] bg-[url('/blog-bg.png')] bg-center bg-cover bg-no-repeat rounded-[32px] flex items-center justify-center flex-col gap-[24px] py-[120px] text-white">
          <h1 className="leading-[140%] tracking-[-0.045em] font-medium text-white text-[64px]">
            Blog
          </h1>
          <p className="text-lg leading-[140%] tracking-[-0.045em] font-medium text-white">
            The Nexchain future is here.
            <br /> Explore what it has to offer.
          </p>
        </div>

        {/* Filters + Search */}
        <div className="max-w-full flex lg:flex-row flex-col lg:justify-between justify-start gap-4">
          <div className="flex gap-2 items-center">
            <button className="bg-[#49ff86] border border-[#183c24] text-[#07130c] text-[14px] leading-[20px] tracking-[0] font-medium rounded-[8px] px-[16px] py-[8px] cursor-pointer box-border h-fit uppercase relative flex gap-[6px] items-center">
              All
            </button>
            <button className="text-sm leading-5 tracking-normal font-medium text-[#4d544f] rounded-md px-4 py-2 cursor-pointer bg-white box-border border border-[#e8e8e8] h-fit uppercase relative flex gap-1.5 items-center">
              <Image
                src={"/insight.svg"}
                width={16}
                height={16}
                alt="insight"
              />
              INSIGHTS
            </button>
            <button className="text-sm leading-5 tracking-normal font-medium text-[#4d544f] rounded-md px-4 py-2 cursor-pointer bg-white box-border border border-[#e8e8e8] h-fit uppercase relative flex gap-1.5 items-center">
              <Image src={"/guides.svg"} width={16} height={16} alt="insight" />
              GUIDES
            </button>
            <button className="text-sm leading-5 tracking-normal font-medium text-[#4d544f] rounded-md px-4 py-2 cursor-pointer bg-white box-border border border-[#e8e8e8] h-fit uppercase relative flex gap-1.5 items-center">
              <Image src={"/tech.svg"} width={16} height={16} alt="insight" />
              TECHNOLOGIES
            </button>
          </div>

          <div className="flex max-w-full ">
            <div className="w-full relative before:content-[''] before:bg-[url('/search.svg')] before:w-[21px] before:h-[21px] before:bg-center before:bg-no-repeat before:bg-contain before:absolute before:top-1/2 before:left-[25px] before:z-[2] before:-translate-y-1/2 before:transform">
              <input
                placeholder="Search"
                type="text"
                className="bg-transparent w-full text-[16px] leading-[140%] tracking-[-0.045em] font-medium text-[#303833] rounded-[48px] min-w-[84px] cursor-pointer box-border border border-[#e8e8e8] lg:ml-[12px] relative py-[13px] pr-[18px] pl-[50px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <section>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {currentCards.map((item, index) => (
              <CardComponent key={index} item={item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1
                    ? "bg-[#49ff86] text-black border-[#183c24]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default BlogPage;
