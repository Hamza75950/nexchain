import Image from "next/image";
import React from "react";

function FeatureSection() {
  const slideData = [
    { imageUrl: "/slide/1.webp" },
    { imageUrl: "/slide/2.webp" },
    { imageUrl: "/slide/3.webp" },
    { imageUrl: "/slide/4.webp" },
    { imageUrl: "/slide/5.webp" },
    { imageUrl: "/slide/6.webp" },
    { imageUrl: "/slide/7.webp" },
    { imageUrl: "/slide/8.webp" },
    { imageUrl: "/slide/9.webp" },
    { imageUrl: "/slide/10.webp" },
    { imageUrl: "/slide/11.webp" },
    { imageUrl: "/slide/12.webp" },
    { imageUrl: "/slide/13.webp" },
    { imageUrl: "/slide/14.webp" },
    { imageUrl: "/slide/15.webp" },
    { imageUrl: "/slide/16.webp" },
    { imageUrl: "/slide/17.webp" },
  ];
  return (
    <section className="sectionContainer bg-white">
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">Feature In</h2>
        </div>
      </div>
      <div className="relative mt-6">
        <div className="featured-strip">
          {/* track duplicated to create seamless loop */}
          <div className="featured-track">
            {slideData.map((item, index) => (
              <div key={index} className="featured-card">
                <Image
                  src={item.imageUrl}
                  alt={"image"}
                  width={220}
                  height={48}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
