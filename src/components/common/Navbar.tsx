"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight, ChevronDown, Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import ButtonComponent from "./Button";
import NavMobileView from "./NavMobileView";

type MenuKey = "about" | "solutions" | "learn" | "testnet" | null;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  const toggleSubmenu = (key: Exclude<MenuKey, null>) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };
  const closeToggleMenu = () => {
    setToggleMenu(false);
  };
  return (
    <>
      <div className="max-w-full bg-white">
        <div className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200">
          <div className="container px-3">
            <div className="flex justify-between items-center">
              <a href="/">
                <Image src="/nex.svg" alt="logo" width={102} height={46} />
              </a>
              <div className="lg:flex hidden gap-4 items-center font-[var(--font-inter)]">
                <div className="relative">
                  <Button
                    className="nav-link shadow-none ml-14"
                    onClick={() => toggleSubmenu("about")}
                    aria-expanded={openMenu === "about"}
                  >
                    About
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMenu === "about" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Button>
                </div>
                <div className="relative">
                  <Button
                    className="nav-link shadow-none"
                    onClick={() => toggleSubmenu("solutions")}
                    aria-expanded={openMenu === "solutions"}
                  >
                    Solutions
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMenu === "solutions" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Button>
                </div>
                <Link href={"/"} className="nav-link">
                  Blog
                </Link>
                <div className="relative">
                  <Button
                    className="nav-link shadow-none"
                    onClick={() => toggleSubmenu("learn")}
                    aria-expanded={openMenu === "learn"}
                  >
                    Learn
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMenu === "learn" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Button>
                </div>
                <div className="relative">
                  <Button
                    className="nav-link shadow-none"
                    onClick={() => toggleSubmenu("testnet")}
                    aria-expanded={openMenu === "testnet"}
                  >
                    Testnet
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMenu === "testnet" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Button>
                </div>
                <Link
                  href={"https://nexchain.ai/airdrop"}
                  target="_blank"
                  className="nav-link"
                >
                  Airdorp
                </Link>
              </div>

              <div className="flex gap-2 items-center">
                <ButtonComponent invert={false} buttonName="Join Presale" />
                <Button
                  onClick={() => setToggleMenu((prev) => !prev)}
                  className="lg:hidden border border-gray-400 py-5"
                >
                  {!toggleMenu ? <Menu className="w-10 h-10" /> : <X />}
                </Button>
              </div>
            </div>
            {/* submenu divider */}
            <div className="lg:flex hidden">
              {openMenu === "about" && (
                <div className="max-w-full  bg-white p-2 ">
                  <Link
                    href="/about/ecosystem"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Ecosystem
                  </Link>
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Tokenomics
                  </Link>
                  <Link
                    href="https://nexchain.ai/documents/Whitepaper-Nexchain.pdf"
                    className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                    target="_blank"
                  >
                    Whitepaper
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </Link>
                  <Link
                    href="https://nexchain.ai/documents/Litepaper-Nexchain.pdf"
                    className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                    target="_blank"
                  >
                    Litepaper
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </Link>
                  <Link
                    href="/about/roadmap"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Roadmap
                  </Link>
                </div>
              )}
              {openMenu === "solutions" && (
                <div className="max-w-full  bg-white p-2 ">
                  <Link
                    href="/solutions/all-solutions"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    All Solutions
                  </Link>
                  <Link
                    href="/solutions/token-extention"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Token Extensions
                  </Link>
                  <Link
                    href="/solutions/real-world"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Real World Assets
                  </Link>
                  <Link
                    href="/solutions/financial-infrastructure"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Financial Infrastructure
                  </Link>
                  <Link
                    href="/solutions/paynemt-tooling"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Payments Tooling
                  </Link>
                  <Link
                    href="/solutions/block-chain"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    BlockChain Links
                  </Link>
                  <Link
                    href="/solutions/permissioned-environments"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Permissioned Environments
                  </Link>
                  <Link
                    href="/solutions/commerce-tooling"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Commerce Tooling
                  </Link>
                </div>
              )}
              {openMenu === "learn" && (
                <div className="max-w-full  bg-white p-2 ">
                  <Link
                    href="/learn/how-to-buy"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    How to buy
                  </Link>
                  <Link
                    href="/learn/referrals"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Referals
                  </Link>
                  <Link
                    href="/learn/docs"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Docs
                  </Link>
                  <Link
                    href="/learn/partners"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Partners
                  </Link>
                  <Link
                    href="/learn/brand-kit"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Brand Kit
                  </Link>
                  <Link
                    href="/learn/careers"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Career
                  </Link>
                  <Link
                    href="/learn/contact"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </div>
              )}
              {openMenu === "testnet" && (
                <div className="max-w-full bg-white">
                  <Link
                    href="https://www.nexscan.cloud/"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                    target="_blank"
                  >
                    Explorer
                  </Link>
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded hover:bg-gray-50"
                    onClick={closeMenu}
                    target="_blank"
                  >
                    Faucet
                  </Link>
                </div>
              )}
            </div>
            {/* spacer to offset fixed navbar height */}
            {/* <div className="h-16" /> */}
            {toggleMenu && (
              <NavMobileView
                openMenu={openMenu}
                toggleSubmenu={toggleSubmenu}
                closeMenu={closeToggleMenu}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
