import { Copy } from "lucide-react";
import Image from "next/image";
import React from "react";
import ButtonComponent from "../common/Button";
import AnimatedNumber from "../common/AnimatedNumber";

function TokenomicSection() {
  return (
    <section className="sectionContainer relative overflow-hidden inset-0 -z-20 bg-white">
      {/* Blurred blob overlay */}

      <div
        aria-hidden
        className="absolute -z-10 left-1/2 top-10 mt-30 lg:h-[50rem] lg:w-[50rem] h-[15rem] w-[15rem] -translate-x-1/2 rounded-full bg-[#7dffcf] blur-3xl "
      />
      <div className=" sectionContainerSecondary">
        <div className="box-border lg:text-center text-start">
          <h2 className="sectionHeading text-3xl ">Nex Tokenomics</h2>
          <p className="sectionDes">
            A balanced tokenomics - sustainable growth, <br />
            rewards, and ecosystem development
          </p>
        </div>

        <div className="tokenomics_wrapp">
          <div className="left_column lg:flex hidden">
            <div className="tokenomics_block">
              <div className="tokenomics_perc">20%</div>
              <div className="tokenomics_title">Public</div>
            </div>
            <div className="tokenomics_block">
              <div className="tokenomics_perc">17%</div>
              <div className="tokenomics_title">Treasury</div>
            </div>
            <div className="tokenomics_block">
              <div className="tokenomics_perc">15%</div>
              <div className="tokenomics_title">Ecosystem</div>
            </div>
            <div className="tokenomics_block">
              <div className="tokenomics_perc">10%</div>
              <div className="tokenomics_title">Team</div>
            </div>
            <div className="tokenomics_block">
              <div className="tokenomics_perc">8%</div>
              <div className="tokenomics_title">Liquidity</div>
            </div>
          </div>

          <div className="tokenomics_img">
            <Image src="/nexball.svg" fill alt="Nexcoin" />
          </div>

          <div className="right_column lg:flex hidden">
            <div className="tokenomics_block flex-row-reverse">
              <div className="tokenomics_perc ">7%</div>
              <div className="tokenomics_title ">Private</div>
            </div>
            <div className="tokenomics_block flex-row-reverse">
              <div className="tokenomics_perc">7%</div>
              <div className="tokenomics_title">Rewards</div>
            </div>
            <div className="tokenomics_block flex-row-reverse">
              <div className="tokenomics_perc">6%</div>
              <div className="tokenomics_title">Burn</div>
            </div>
            <div className="tokenomics_block flex-row-reverse">
              <div className="tokenomics_perc">5%</div>
              <div className="tokenomics_title">Seed</div>
            </div>
            <div className="tokenomics_block flex-row-reverse">
              <div className="tokenomics_perc">5%</div>
              <div className="tokenomics_title">Marketing</div>
            </div>
          </div>
        </div>
        <div className=" lg:text-center text-left mb-12 relative z-[1]">
          <label className="text-[14px] leading-[140%] tracking-[-0.045em] font-normal mb-1 uppercase ">
            Smart Contract
          </label>
          <div className="flex flex-row gap-4  lg:mx-auto items-center">
            <label className="text-base leading-[140%] tracking-[-0.045em] font-normal block w-[calc(100%-64px)] break-words mb-0">
              0xB9Ca2693Dfb8B4fA3Bb1B49934FE2D442427221e
            </label>
            <button className="w-12 h-12 border border-[#e8e8e8] bg-white rounded-full cursor-pointer relative flex items-center justify-center">
              <Copy className="scale-x-[-1]" />
            </button>
          </div>
        </div>
        <div className="bg-[#f9faf9] p-6 flex justify-between lg:flex-row flex-col lg:text-left text-center gap-4 w-full max-w-[940px] mx-auto rounded-lg items-center border border-[#e8e8e8]">
          <div className="box-border">
            <p className="text-[14px] leading-[140%] tracking-[-0.045em] font-normal mb-1 uppercase">
              Total initial Supply
            </p>
            {/* <p className="text-[32px] leading-[140%] tracking-[-0.045em] font-medium">
              2,150,000,000 &nbsp;NEX{" "}
            </p> */}
            <p className="text-[32px] leading-[140%] tracking-[-0.045em] font-medium">
              <AnimatedNumber value={2150000000} /> &nbsp;NEX
            </p>
          </div>
          <div className="flex gap-4">
            <ButtonComponent invert={false} buttonName="Join Presale" />
            <ButtonComponent invert={true} buttonName="Tokenomics" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenomicSection;
