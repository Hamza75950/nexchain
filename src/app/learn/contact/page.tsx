"use client";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Submitted!");
    console.log(e);
  };
  return (
    <section className="pt-[160px] pb-[94px] bg-contain bg-no-repeat min-h-[calc(100vh-106px)] max-w-[100vw] bg-[#fafafa]">
      <div className="max-w-[1360px] m-auto px-[15px] grid lg:grid-cols-2 grid-cols-1 ">
        <div className="max-w-[450px] flex justify-center flex-col">
          <h1 className="mb-8 lg:text-[48px] text-[32px] lg:max-w-full max-w-[280px] leading-[140%] tracking-[-0.045em] font-medium">
            We're always here for you
          </h1>
          <p className="lg:text-[24px] text-[18px] leading-[140%] tracking-[-0.045em] font-normal mb-12">
            Please leave us a message. Our team will contact you as soon as
            possible.
          </p>
          <div className="flex flex-col gap-2">
            <label className="text-[18px] leading-[140%] tracking-[-0.045em] font-medium">
              Mail
            </label>
            <div className="flex items-center justify-start gap-2.5">
              <CornerDownRight className="w-[24px] h-[24px]" />
              <Link
                href={"mailto:support@nexchain.ai"}
                className="lg:text-[32px] text-[18px] leading-[140%] tracking-[-0.045em] font-medium underline"
              >
                support@nexchain.ai
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-8 rounded-lg lg:w-[604px] max-w-full flex flex-col gap-5 lg:max-w-[45vw] mt-[56px]">
            <h2 className="text-2xl leading-[140%] tracking-[-0.045em] font-medium mb-5">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="hover:border-gray-600 hover:shadow-lg border border-[#e8e8e8] rounded-[104px] flex text-base leading-[140%] tracking-[-0.045em] font-normal p-[17px] bg-transparent transition duration-300 resize-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="hover:border-gray-600 hover:shadow-lg border border-[#e8e8e8] rounded-[104px] flex text-base leading-[140%] tracking-[-0.045em] font-normal p-[17px] bg-transparent transition duration-300 resize-none"
              />
              <input
                type="text"
                name="subject"
                required
                placeholder="Your Subject"
                className="hover:border-gray-600 hover:shadow-lg border border-[#e8e8e8] rounded-[104px] flex text-base leading-[140%] tracking-[-0.045em] font-normal p-[17px] bg-transparent transition duration-300 resize-none"
              />
              <textarea
                maxLength={200}
                placeholder="Message"
                required
                className="hover:border-gray-600 hover:shadow-lg border border-[#e8e8e8] rounded-[24px] h-[185px] flex text-base leading-[140%] tracking-[-0.045em] font-normal p-[17px] bg-transparent transition duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="text-[#0a1a10] flex items-center justify-center bg-[#49ff86] shadow-[0_4px_20px_rgba(225,219,219,0.2)] rounded-[48px] border-none py-4 px-[30px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
