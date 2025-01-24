'use client'
import { useState } from "react";
import Image from "next/image";


const LearnMoreSectionCarasoul = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
    const sections = ["About", "Blog", "Something Else", "TBD"];

    const handleDotClick = (index) => {
        setCurrentIndex(index);
      };
    
  
    return (
      <div className="md:mt-20 mt-0 overflow-hidden">
        <h2 className="text-xl font-bold mb-4">Learn more</h2>
        <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 87.3333}%)`,
        }}
      >
          {sections.map((text, index) => (
            <div
            key={index}
            className="w-[87.3333%] shrink-0 p-2"
            style={{ boxSizing: "border-box" }}
          >
            <div
              className="relative h-20  rounded-xl overflow-hidden cursor-pointer opacity-90 transition-opacity"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover px-3 bg-center"
                style={{ backgroundImage: "url('/blog.png')" }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />
              {/* Text (on top) */}
              <div className="relative z-10 font-bold flex items-center justify-center h-full text-white brightness-110">
                {text}
              </div>
            </div>
            </div>
          ))}
        </div>
        {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {sections.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`cursor-pointer w-6 h-1 mx-1 rounded transition-all ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
      </div>
    );
  };
  
  export default LearnMoreSectionCarasoul;
  