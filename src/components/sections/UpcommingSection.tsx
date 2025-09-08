import React from "react";
import { GridPattern } from "../magicui/grid-pattern";
import ButtonComponent from "../common/Button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function UpcommingSection() {
  return (
    <section className="sectionContainer  bg-white">
      <div className=" max-w-[1360px] m-auto">
        {/* upcomming Drops */}
        <h1 className="max-w-full  md:text-5xl text-2xl font-medium mt-4">
          Upcomming Drops
        </h1>
        {/* para */}
        <p className="max-w-4xl  md:text-lg text-base my-5">
          Nexchain is constantly evolving. Follow the latest launches, key
          updates, and opportunities to engage early with our growing ecosystem.
        </p>
        {/* grid */}
        <div className="flex lg:flex-row flex-col justify-center items-stretch gap-4">
          {/* left section */}
          <div className="border border-gray-200 rounded-lg md:max-w-[70%] md:order-1 max-w-full order-2 flex-1 flex flex-col">
            <section className="relative overflow-hidden flex flex-1 items-center justify-center h-full">
              {/* Grid background */}
              <GridPattern
                className="absolute inset-0 -z-20 "
                width={45}
                height={45}
              />

              {/* Blurred blob overlay */}
              <div
                aria-hidden
                className="absolute -z-10 left-1/2 top-10 lg:h-[50rem] lg:w-[50rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#7dffcf] blur-3xl opacity-50"
              />

              {/* Foreground content */}
              <div className="relative w-full p-6 flex flex-col h-full gap-4">
                <p className="uppercase lg:text-6xl text-[32px] text-center font-medium">
                  nexchain airdrop
                </p>
                <div className="max-w-full flex justify-between lg:items-end items-center gap-4 relative lg:flex-row flex-col-reverse  flex-1">
                  {/* Left Button (Bottom Left) */}
                  <div className="mb-2 w-fit">
                    <ButtonComponent
                      borderColor={"border-[#B60079]"}
                      invert={true}
                      buttonName="Join Airdrop"
                    />
                  </div>

                  {/* Center Image */}
                  <div className="flex justify-center items-end w-lg h-full">
                    <Image
                      src="/airdrop.svg"
                      alt="airdrop"
                      width={200}
                      height={200}
                      className="object-cover h-full w-auto"
                    />
                  </div>

                  {/* Right Text (Bottom Right) */}
                  <div className="mb-2 lg:text-left text-center ">
                    <p className="text-gray-600 lg:text-base text-sm">
                      Join the airdrop campaign
                      <br />
                      and secure your stake in the future of decentralized
                      finance.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* right section */}
          <div className="border border-gray-200 rounded-lg flex-1 order-1 md:order-2 flex flex-col">
            <div className="flex flex-col h-full">
              <div className="p-4 ">
                <p className="text-gray-500 max-w-full">UPCOMMING EVENTS</p>
              </div>
              <div className="p-4 bg-gray-100 flex-1 flex flex-col">
                <div className="flex justify-between items-center gap-4 text-black ">
                  <div className="flex justify-center items-center gap-1">
                    <ArrowLeft />
                    <p className="text-lg">Airdrop</p>
                  </div>
                  <div className="px-2 py-2 border border-gray-500 rounded-lg bg-white">
                    <p>IT&apos;S STARTED</p>
                  </div>
                </div>
                <div className="p-2 text-sm">
                  <p>
                    Join the airdrop campaign and secure your stake in the
                    future of decentralized finance. <br />
                    Nexchain is opening early access to its ecosystem.
                  </p>
                </div>
              </div>
              {/* second section */}
              <div className="p-4 text-gray-500 flex-1 flex flex-col">
                <div className="flex justify-between items-center gap-4 text-black ">
                  <p className="text-lg">Testnet</p>
                  <div className="px-2 py-2 border border-gray-500 rounded-lg bg-white">
                    <p>IT&apos;S STARTED</p>
                  </div>
                </div>
                <div className="p-2 text-sm">
                  <p>
                    Join the Nexchain testnet and experience <br />
                    next-gen speed, scalability, and interoperability. <br />
                    Step into the future of decentralized infrastructure —
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="max-w-full p-6 flex justify-center items-center">
          <ButtonComponent invert={false} buttonName="Join Presale" />
        </div>
      </div>
    </section>
  );
}
