import Image from "next/image";
import React from "react";

function ExperienceSection() {
  return (
    // <section className="max-w-[2560px] px-4">
    //   <div className="thirdContainer flex flex-col md:flex-row justify-between gap-60 items-center max-w-[1460px] mx-auto">
    //     <div className="order-2 md:order-1">
    // <h2 className="lg:text-[40px] text-[24px] leading-[140%] tracking-[-0.045em] font-medium text-white">
    //   Experience a Revolutionary{" "}
    //   <span className="text-[#49ff86]">Revenue Share </span>
    //   for NEX Token Holders
    // </h2>
    // <p className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal text-[#e8e8e8]">
    //   At Nexсhain, we reward our community with a daily share of{" "}
    //   <b>10% of all gas fee revenue</b>. Simply hold your NEX in a
    //   non-custodial wallet, and you’ll automatically receive a
    //   proportional portion of the collected gas fees - every single day.
    //   Join our ecosystem and benefit from our commitment to fair and
    //   transparent value distribution.
    // </p>
    //     </div>
    //     <div className="relative order-1 md:order-2">
    //       <div className="absolute md:right-0 md:top-0 top-[-30px] right-[-20]  md:w-[119px] md:h-[116px] w-[96px] h-[96px]  bg-[#07130c] rounded-full text-white flex justify-center items-center text-center z-[1] uppercase text-[14px] leading-[140%] tracking-[-0.045em] font-bold">
    //         10% Daily Revenue
    //       </div>
    //       <div className="relative">
    //         <Image src={"/nexImage.svg"} alt="nex" width={350} height={350} />
    //       </div>
    //     </div>

    //   </div>
    // </section>
    <section className="px-4 bg-white">
      <div className="bg-[#07130c] bg-[url('/background.svg')] max-w-[1360px] m-auto bg-center bg-cover relative overflow-hidden py-[120px] px-[80px] rounded-lg">
        <div className="w-full max-w-[1200px] flex lg:flex-row justify-between items-center mx-auto flex-col-reverse">
          <div className="text-white flex flex-col gap-6 w-full max-w-[860px] min-w-[250px] mt-8">
            <h2 className="lg:text-[40px] text-[24px] leading-[140%] tracking-[-0.045em] font-medium text-white">
              Experience a Revolutionary{" "}
              <span className="text-[#49ff86]">Revenue Share </span>
              for NEX Token Holders
            </h2>
            <p className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal text-[#e8e8e8]">
              At Nexсhain, we reward our community with a daily share of{" "}
              <b>10% of all gas fee revenue</b>. Simply hold your NEX in a
              non-custodial wallet, and you’ll automatically receive a
              proportional portion of the collected gas fees - every single day.
              Join our ecosystem and benefit from our commitment to fair and
              transparent value distribution.
            </p>
          </div>
          <div className="relative">
            <div className="absolute lg:right-0 right-[-25px] lg:w-[119px] lg:h-[116px] h-[96px] w-[96px] bg-[#07130c] rounded-full text-white flex justify-center items-center text-center z-10 uppercase lg:text-sm text-xs  leading-[140%] tracking-[-0.045em] font-bold">
              10% Daily Revenue
            </div>
            <div
              className="absolute top-1/2 left-1/2 lg:w-[500px] lg:h-[500px] w-[250px] h-[250px] opacity-50 blur-[50px]"
              style={{
                transform: "translate(-50%, -50%)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                backgroundImage:
                  "linear-gradient(to right top, #49ff86, #03ffdd, #4affc3, #62ffd9, #80ffea)",
                animation: "blobAnim 10s ease-in-out infinite",
              }}
            ></div>
            <div className="relative lg:w-[280px] lg:h-[280px] h-[200px] w-[200px]">
              <div className="absolute inset-0 h-full w-full text-transparent">
                <Image
                  src={"/nexImage.svg"}
                  alt="nex"
                  fill
                  className="object-contain max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
