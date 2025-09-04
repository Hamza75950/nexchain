import React from "react";
import CardComponent from "../common/CardComponent";

function BlogSection() {
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
  ];
  return (
    <div className="w-full py-[30px]">
      <div className="max-w-[1360px] m-auto px-[15px]">
        <div className="sectionHeading">Recent Articles</div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {blogData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
