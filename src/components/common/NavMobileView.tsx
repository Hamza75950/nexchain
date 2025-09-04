import { ArrowUpRight, ChevronDown } from "lucide-react";
import FooterSocialLinks from "./FooterSocialLinks";
import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";

interface NavMobileViewType {
  openMenu: string | null;
  toggleSubmenu: any;
  closeMenu: () => void;
}

const NavMobileView: React.FC<NavMobileViewType> = ({
  openMenu,
  toggleSubmenu,
  closeMenu,
}) => {
  return (
    <>
      <div className="max-h-[80vh] mx-auto lg:hidden overflow-y-auto">
        <div className=" border-b-1 border-gray-300 flex-col items-center">
          <div>
            <Button
              className="nav-link mt-6 shadow-none "
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
            {openMenu === "about" && (
              <div className="pl-4 pb-2">
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
                  href="/"
                  className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Whitepaper
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50"
                  onClick={closeMenu}
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
          </div>
          <div>
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
            {openMenu === "solutions" && (
              <div className="pl-4 pb-2">
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
          </div>
          <Link href={"/"} className="nav-link" onClick={closeMenu}>
            Blog
          </Link>
          <div>
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
            {openMenu === "learn" && (
              <div className="pl-4 pb-2">
                <Link
                  href="/learn/docs"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Docs
                </Link>
                <Link
                  href="/learn/tutorials"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Tutorials
                </Link>
                <Link
                  href="/learn/blog"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </div>
            )}
          </div>
          <div>
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
            {openMenu === "testnet" && (
              <div className="pl-4 pb-2">
                <Link
                  href="/testnet/faucet"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Faucet
                </Link>
                <Link
                  href="/testnet/explorer"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Explorer
                </Link>
              </div>
            )}
          </div>
          <Link href={"/"} className="nav-link" onClick={closeMenu}>
            Airdorp
          </Link>
        </div>
        <p className="text-sm my-6">
          Nexchain is an L1 blockchain protocol that leverages artificial
          intelligence (AI) to optimize scalability, security, and
          interoperability.
        </p>
        <FooterSocialLinks invert={true} />
      </div>
    </>
  );
};

export default NavMobileView;
