import { GridPattern } from "@/components/magicui/grid-pattern";
import ButtonComponent from "../common/Button";
import Image from "next/image";
import FlatButton from "../common/FlatButton";

interface HeroType {
  buttonLable?: string;
  heading: string;
  paragraph: string;
  bottomButton: boolean;
  bottomCard: boolean;
  multicard?: boolean;
  buttonLableIcon?: string;
  headingTextLarge?: string;
  headingTextSmall?: string;
}

const HeroSection: React.FC<HeroType> = ({
  buttonLable,
  heading,
  paragraph,
  bottomButton,
  bottomCard,
  multicard,
  buttonLableIcon,
  headingTextLarge = "lg:text-[48px]",
  headingTextSmall = "text-[32px]",
}) => {
  return (
    <section className=" flex flex-col items-center justify-center relative overflow-hidden pt-20 lg:pt-24">
      {/* Grid background */}
      <GridPattern width={80} height={80} className="absolute inset-0 -z-20" />

      {/* Blurred blob overlay */}
      <div
        aria-hidden
        className="absolute -z-10 left-1/2 top-10 mt-30 lg:h-[50rem] lg:w-[50rem] h-[15rem] w-[15rem] -translate-x-1/2 rounded-full bg-[#7dffcf] blur-3xl "
      />

      {/* Foreground content */}
      <div className="relative w-full ">
        <div className="flex flex-col max-w-[970px] py-8 gap-4 px-4 z-10  items-center mx-auto mt-10 text-center">
          {buttonLable && (
            <FlatButton name={buttonLable} lableIcon={buttonLableIcon} />
          )}
          <div className="text-center flex flex-col items-center">
            <h1
              className={`leading-[140%] tracking-[-0.045em] text-center whitespace-break-spaces font-medium ${headingTextLarge} ${headingTextSmall}`}
            >
              {heading}
            </h1>
            <p className="text-[18px] leading-[150%] tracking-[-0.045em] font-normal w-full text-center ">
              {paragraph}
            </p>
          </div>
          {/* bottom card */}
          {bottomCard && (
            <div className="flex justify-center items-center">
              {/* card  */}
              <div className="bg-white p-8 lg:max-w-4xl  shadow-lg flex flex-col gap-4 border border-[#e8e8e8]  px-8 py-6  box-border rounded-lg w-[min(480px,100%)] mt-6 mx-auto text-[#07130c]">
                {/* 1st section */}
                <div className=" flex flex-col gap-4">
                  <div className="flex justify-between gap-30 items-center text-xs lg:text-lg">
                    <p>Stage 26</p>
                    <p>1 NEX = $0.104</p>
                  </div>

                  <progress
                    className="appearance-none w-full rounded-lg border border-[#07130c] h-[18px] box-border overflow-hidden"
                    value="170434912.6977728"
                    max="182276007"
                  ></progress>
                  <div className="flex justify-between lg:gap-10 gap-5 items-center text-xs lg:text-lg">
                    <p>USDT RAISED:</p>
                    <p>{"$9,518,009  / $10,125,000"} </p>
                  </div>
                </div>
                {/* 2nd section */}
                <div className="md:flex-row md:justify-evenly justify-center items-center flex flex-col gap-4 p-4 border-b border-gray-300">
                  <ButtonComponent invert={false} buttonName="Join Presale" />
                  <ButtonComponent invert={true} buttonName="Whitepaper" />
                </div>
                {/* 3rd section */}
                <div className="flex justify-evenly items-center gap-4 p-4 ">
                  <div className="flex justify-center items-center gap-4">
                    <div className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                      <Image
                        src={"/audit1.svg"}
                        alt="audit1"
                        width={20}
                        height={20}
                        className="object-cover invert"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[14px] leading-[140%] tracking-[-0.045em] font-medium text-[#07130c] uppercase">
                        Solid Proof
                      </p>

                      <p className=" text-xs text-gray-400 md:text-xs">
                        Smart Contract Audit
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                      <Image
                        src={"/audit2.svg"}
                        alt="audit1"
                        width={20}
                        height={20}
                        className="object-cover invert"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[14px] leading-[140%] tracking-[-0.045em] font-medium text-[#07130c] uppercase">
                        CERTIK
                      </p>

                      <p className=" text-xs text-gray-400 md:text-xs">
                        Smart Contract Audit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {bottomButton && (
            <ButtonComponent buttonName="Join Presale" invert={false} />
          )}
        </div>
      </div>

      {multicard && (
        <section className="pt-20 px-4 w-full max-w-[1230px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          <div className="relative rounded-2xl p-6 bg-green-900 text-white transition-colors duration-300 hover:bg-green-800">
            <h3 className="text-xl font-semibold mb-4">
              Token <br /> Extensions
            </h3>
            <a href="/solutions/token-extensions">
              <button className="px-4 py-2 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200">
                Read More
              </button>
            </a>
            <div className="absolute top-4 right-4">
              <Image
                alt="Token Extensions Icon"
                src="/cardIcon1.svg"
                width={32}
                height={32}
              />
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default HeroSection;
