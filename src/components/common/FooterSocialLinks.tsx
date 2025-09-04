import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterSocialLinksType {
  invert?: boolean;
}

const FooterSocialLinks: React.FC<FooterSocialLinksType> = ({ invert }) => {
  const socialLinkData = [
    { name: "twitter", imagePath: "/twitter.svg", link: "/" },
    { name: "telegram", imagePath: "/telegram.svg", link: "/" },
    { name: "facebook", imagePath: "/facebook.svg", link: "/" },
    { name: "instagram", imagePath: "/instagram.svg", link: "/" },
    { name: "medium", imagePath: "/medium.svg", link: "/" },
    { name: "coinmarketcap", imagePath: "/coinmarketcap.svg", link: "/" },
    { name: "linkedIn", imagePath: "/linkedin.svg", link: "/" },
    { name: "blogs", imagePath: "/blog.svg", link: "/" },
  ];
  return (
    <div className={`grid grid-cols-4 gap-3 w-fit ${invert && "invert"}`}>
      {socialLinkData.map((data, index) => (
        <Link
          key={index}
          href={data.link}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-black "
        >
          <Image
            className="object-contain"
            src={data.imagePath}
            width={24}
            height={24}
            alt={data.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default FooterSocialLinks;
