import Image from "next/image";
import React from "react";
import FooterSocialLinks from "./FooterSocialLinks";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import ButtonComponent from "./Button";
import Link from "next/link";

function Footer() {
  const aboutData = [
    { title: "Solutions", link: "/solutions" },
    { title: "Ecosystem", link: "/ecosystem" },
    { title: "Tokenomics", link: "/tokenomics" },
    { title: "Whitepaper", link: "/whitepaper" },
    { title: "Litepaper", link: "/litepaper" },
    { title: "Roadmap", link: "/roadmap" },
  ];

  const learnData = [
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/blog" },
    { title: "Docs", link: "/docs" },
    { title: "How to buy", link: "/how-to-buy" },
    { title: "Referrals", link: "/referrals" },
    { title: "Partners", link: "/partners" },
    { title: "Brand Kit", link: "/brand-kit" },
    { title: "Career", link: "/career" },
  ];
  const legalData = [
    { title: "Terms of Use", link: "/terms-condition" },
    { title: "Cookie Policy", link: "/cookie-policy" },
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Disclaimer", link: "/disclaimer" },
  ];

  return (
    <footer className="max-w-[100vw] lg:pt-[96px] pt-[60px] px-4 lg:pb-[32px] pb-[16px] bg-black text-white">
      {/* web view */}
      <div className="max-w-[1360px] m-auto px-[40px] hidden lg:block">
        <div className="grid grid-cols-[auto_auto] gap-6 mb-12">
          <div>
            <div>
              <div className="mb-7 relative  ">
                <Image
                  src={"/nexfooter.svg"}
                  width={142}
                  height={45}
                  alt="nex"
                />
              </div>
              <p className=" hidden text-white text-sm leading-[140%] tracking-[-0.045em] font-normal max-w-[280px] lg:block mb-7">
                Nexchain is an L1 blockchain protocol that leverages artificial
                intelligence (AI) to optimize scalability, security, and
                interoperability.
              </p>
            </div>
            <FooterSocialLinks />
          </div>
          <div className="flex justify-end md:gap-16 gap-6">
            <div>
              <p className="text-sm leading-5 tracking-normal font-medium uppercase text-[#989898] mb-6">
                About
              </p>
              <ul className="list-none p-0 ">
                {aboutData.map((item, index) => (
                  <li key={index} className="mb-3 leading-none">
                    <Link
                      href={item.link}
                      className="flex  text-white text-base leading-[140%] tracking-[-0.045em] font-normal transition duration-300"
                    >
                      {item.title}
                      {(item.title === "Whitepaper" ||
                        item.title === "Litepaper") && (
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm leading-5 tracking-normal font-medium uppercase text-[#989898] mb-6">
                Learn
              </p>
              <ul className="list-none p-0 ">
                {learnData.map((item, index) => (
                  <li key={index} className="mb-3 leading-none">
                    <Link
                      href={item.link}
                      className="flex  text-white text-base leading-[140%] tracking-[-0.045em] font-normal transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm leading-5 tracking-normal font-medium uppercase text-[#989898] mb-6">
                Learn
              </p>
              <ul className="list-none p-0 ">
                {legalData.map((item, index) => (
                  <li key={index} className="mb-3 leading-none">
                    <Link
                      href={item.link}
                      className="flex  text-white text-base leading-[140%] tracking-[-0.045em] font-normal transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:block hidden">
              <ButtonComponent invert={true} buttonName="Join Presale" />
            </div>
          </div>
        </div>
        <div className="text-[#989898] border-t border-[#474c49] pt-8">
          <p className="text-[#9a9a9a] text-sm leading-[140%] tracking-[-0.045em] font-normal">
            © 2025 Nexchain. All Rights Reserved
          </p>
        </div>
      </div>
      {/* mobile view */}
      <div className="max-w-[100%] lg:hidden">
        <div className="flex flex-col gap-8 mb-8">
          <div className="flex justify-start items-center gap-2">
            <div className="relative  ">
              <Image src={"/nexfooter.svg"} width={126} height={45} alt="nex" />
            </div>
            <ButtonComponent invert={true} buttonName="Join Presale" />
          </div>
          <div className="grid grid-cols-2 gap-0 gap-y-8">
            <div>
              <p className="text-sm leading-5 tracking-normal font-medium uppercase text-[#989898] mb-6">
                About
              </p>
              <ul className="list-none p-0 ">
                {aboutData.map((item, index) => (
                  <li key={index} className="mb-3 leading-none">
                    <Link
                      href={item.link}
                      className="flex  text-white text-base leading-[140%] tracking-[-0.045em] font-normal transition duration-300"
                    >
                      {item.title}
                      {(item.title === "Whitepaper" ||
                        item.title === "Litepaper") && (
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm leading-5 tracking-normal font-medium uppercase text-[#989898] mb-6">
                Learn
              </p>
              <ul className="list-none p-0 ">
                {learnData.map((item, index) => (
                  <li key={index} className="mb-3 leading-none">
                    <Link
                      href={item.link}
                      className="flex  text-white text-base leading-[140%] tracking-[-0.045em] font-normal transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <p className="text-sm leading-5 tracking-normal font-medium uppercase text-[#989898] mb-6">
                Learn
              </p>
              <ul className="list-none p-0 ">
                {legalData.map((item, index) => (
                  <li key={index} className="mb-3 leading-none">
                    <Link
                      href={item.link}
                      className="flex  text-white text-base leading-[140%] tracking-[-0.045em] font-normal transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-full col-span-2">
              <FooterSocialLinks />
            </div>
          </div>
        </div>
        <div className="text-[#989898] border-t border-[#474c49] pt-8">
          <p className="text-[#9a9a9a] text-sm leading-[140%] tracking-[-0.045em] font-normal">
            © 2025 Nexchain. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
