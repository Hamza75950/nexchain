"use client";
import HeroSection from "@/components/sections/HeroSection";
import { X } from "lucide-react";
import React, { useState } from "react";

function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobData = [
    {
      position: "Blockchain Developer (Senior)",
      location: "All Location",
      type: "HOT",
    },
    {
      position: "Blockchain Developer (Middle)",
      location: "All Location",
      type: "HOT",
    },
    { position: "Cyber Security", location: "All Location", type: "HOT" },
    { position: "Brand Manager", location: "All Location", type: "HOT" },
    { position: "Blockchain Engineer", location: "All Location", type: "HOT" },
    { position: "Blockchain Analyst", location: "All Location", type: "HOT" },
    { position: "Project Manager", location: "All Location", type: "HOT" },
    {
      position: "Brand Manager, - Remote",
      location: "All Location",
      type: "HOT",
    },
    {
      position: "Business Developer, - Remote",
      location: "All Location",
      type: "HOT",
    },
    {
      position: "Project Manager, - Remote",
      location: "All Location",
      type: "HOT",
    },
    { position: "Brand Manager", location: "All Location", type: "HOT" },
    { position: "Business Developer", location: "All Location", type: "HOT" },
    { position: "Project Manager", location: "All Location", type: "HOT" },
  ];

  const openModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Submitted!");
    console.log(e);
    closeModal();
  };

  return (
    <>
      <HeroSection
        heading={`The future is built on Nexchain`}
        paragraph="Join Us As We Dive Deep Into Our Technology"
        bottomButton={true}
        bottomCard={false}
        multicard={false}
      />
      <section className="max-w-[100vw] py-[100px] bg-[#fafafa]">
        <div className="max-w-[1360px] m-auto px-[15px] ">
          <div className="bg-[#ffffff] max-w-[940px] rounded-[8px] p-[32px] box-border m-auto flex flex-col gap-4">
            {jobData.map((item, index) => (
              <div
                key={index}
                className="bg-[#f6f6f6] max-w-[872px] lg:grid lg:grid-cols-[minmax(0,350px)_auto_auto_auto] flex flex-col rounded-lg border border-gray-300"
              >
                {/* Position */}
                <div className="flex flex-col order-2 lg:order-1 lg:p-[24px] p-[15px] text-[20px] font-medium text-[#07130c] whitespace-normal">
                  <p className="text-[16px] text-[#4d544f] mb-2">Position</p>
                  {item.position}
                </div>
                {/* Location */}
                <div className="flex flex-col lg:p-[24px] p-[15px] order-3 lg:order-2 text-[20px] font-medium text-[#07130c] whitespace-normal">
                  <p className="text-[16px] text-[#4d544f] mb-2">Location</p>
                  {item.location}
                </div>
                {/* Tag */}
                <div className="flex order-1 lg:order-3 lg:justify-end justify-start lg:p-[24px] p-[15px]">
                  <label className="text-white bg-[#d73d3d] rounded-[64px] py-[18px] px-[36px] text-[16px] font-medium uppercase">
                    {item.type}
                  </label>
                </div>
                {/* Button */}
                <div className="flex flex-col lg:p-[24px] p-[15px] order-4">
                  <button
                    onClick={() => openModal(item.position)}
                    className="text-[#0a1a10] text-center w-full flex items-center justify-center bg-[#49ff86] shadow-[0_4px_20px_rgba(225,219,219,0.2)] rounded-[48px] py-4 px-[30px]"
                  >
                    Send CV
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             bg-white border border-[#e8e8e8] 
             shadow-[4px_8px_128px_8px_rgba(146,162,151,0.2)] 
             rounded-[24px] box-border p-8 z-[99] 
             overflow-auto w-full max-w-[760px] max-h-[80vh] "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute box-border w-12 h-12 right-[23px] flex items-center justify-center top-[23px] border border-[#0a1a10] rounded-[13px] bg-no-repeat bg-center cursor-pointer"
            >
              <X />
            </button>

            {/* <h2 className="text-xl font-semibold mb-4">
              Apply for {selectedJob}
            </h2> */}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-[#303833] text-[20px] leading-[140%] tracking-[-0.045em] font-medium mb-4 block">
                Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="border border-[#e8e8e8] rounded-[104px] flex text-[18px] leading-[150%] tracking-[-0.045em] font-normal p-[17px] transition duration-300 resize-none box-border mb-4 w-full bg-white"
              />
              <label className="text-[#303833] text-[20px] leading-[140%] tracking-[-0.045em] font-medium mb-4 block">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border border-[#e8e8e8] rounded-[104px] flex text-[18px] leading-[150%] tracking-[-0.045em] font-normal p-[17px] transition duration-300 resize-none box-border mb-4 w-full bg-white"
              />
              <label
                htmlFor="resume-upload"
                className="text-[#303833] text-[20px] leading-[140%] tracking-[-0.045em] font-medium mb-4 block"
              >
                Resume*
              </label>

              <div className="p-[50px_20px] rounded-[16px] bg-[url(/uploadBorder.svg)] flex flex-row items-center justify-center flex-wrap">
                <label
                  htmlFor="resume-upload"
                  className="border border-[#49ff86] text-black bg-white py-[15px] px-[25px] text-[18px] leading-[140%] tracking-[-0.045em] font-medium relative rounded-[56px] flex flex-row justify-center items-center mr-4 cursor-pointer"
                >
                  Upload File
                </label>
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.docx,.doc,.pages"
                  required
                  className="hidden"
                />
                *.pdf, *.docx, *.doc, *.pages
              </div>
              <button
                type="submit"
                className="text-[#0a1a10] flex items-center justify-center py-[16px] px-[30px] bg-[#49ff86] shadow-[0_4px_20px_rgba(225,219,219,0.2)] rounded-[48px] border-0"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CareersPage;
