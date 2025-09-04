import React from "react";
import ButtonComponent from "../common/Button";

function Web3Section() {
  return (
    <section className="sectionContainer  bg-[#fafafa]">
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">
            Nexchain Token Presale: Your Early Access to the Future of Web3
          </h2>
          <p className="sectionDes">
            One of the top crypto presales in the world, NEX takes advantage of
            AI-driven possibilities to revolutionize Web3. The NEX token price
            grows with every stage — don’t hesitate, join us today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12">
          <div className="border border-[#e8e8e8] bg-white rounded-lg grid grid-cols-3 justify-between p-[30px] px-8">
            <div className="flex flex-col-reverse justify-between gap-3">
              <label className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal w-[60px] text-[#4d544f]">
                Current Price
              </label>
              <b className="text-2xl font-medium">$0.014</b>
            </div>
            <div className="flex flex-col-reverse justify-between gap-3">
              <label className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal w-[60px] text-[#4d544f]">
                Listing Price
              </label>
              <b className="text-2xl font-medium">$0.3</b>
            </div>
            <div className="flex flex-col-reverse justify-between gap-3">
              <label className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal w-[60px] text-[#4d544f]">
                Expexted ROI
              </label>
              <b className="text-2xl font-medium">288%</b>
            </div>
          </div>
          <div className="border border-[#e8e8e8] bg-white rounded-lg justify-between p-[30px] px-8">
            <div className="flex flex-col w-full gap-2">
              <div className="flex justify-between items-center text-[18px] leading-[140%] tracking-[-0.045em] font-medium mb-3">
                <label className="text-[#4d544f] text-[16px] leading-[140%] tracking-[-0.045em] font-normal">
                  Stage 26
                </label>
                <label className="text-[16px] leading-[140%] tracking-[-0.045em] font-medium">
                  1 NEX = $0.104
                </label>
              </div>
              <progress
                className="appearance-none w-full rounded-lg border border-[#07130c] h-[18px] box-border overflow-hidden"
                value="180434912.6977728"
                max="182276007"
              ></progress>
              <div className="flex justify-between items-center text-sm leading-[140%] tracking-[-0.045em] font-normal text-[#4d544f] uppercase mt-1">
                <label>USDT Raised:</label>
                <label>
                  <b>$9,582,395</b> / $10,125,000
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-lg border border-[#49ff86] bg-white mt-4">
          <h3 className="text-2xl leading-[140%] tracking-[-0.045em] font-medium mb-3">
            Don’t wait! Prices rise with each stage — act fast to secure the
            best deal.
          </h3>
          <p className="text-lg leading-[150%] tracking-[-0.045em] font-normal mb-4">
            The NEX token price increases at every stage of the Nexchain token
            presale — secure your deal now and benefit from the full potential
            of the coin.
          </p>
          <ButtonComponent invert={false} buttonName="Join Presale" />
        </div>
      </div>
    </section>
  );
}

export default Web3Section;
