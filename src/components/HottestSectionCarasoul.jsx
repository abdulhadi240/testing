'use client'
import { useState } from "react";
import Image from "next/image";

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hottestData = [
    {
      name: "VIRTUAL",
      imageUrl: "/Container.png",
      verified: false,
      isUp: true,
      change: "0.59%",
      price: "$2.74",
      marketCap: "$1.7B",
    },
    {
      name: "AI16Z",
      imageUrl: "/Container2.png",
      verified: true,
      isUp: false,
      change: "11.59%",
      price: "$0.0873",
      marketCap: "$962K",
    },
    {
      name: "TICKER3",
      imageUrl: "/Container3.png",
      verified: true,
      price: "$0.1232",
      marketCap: "$701M",
    },
    {
      name: "TICKER4",
      imageUrl: "/Container4.png",
      verified: false,
      price: "$25.51",
      marketCap: "$988M",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden -mx-4 -px-4 my-10">
      {/* Carousel Container */}
      <h1 className="font-bold text-2xl ">Trending</h1>
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 87.3333}%)`,
        }}
      >
        {hottestData.map((item, index) => (
          <div
            key={index}
            className="w-[87.3333%] shrink-0 p-2"
            style={{ boxSizing: "border-box" }}
          >
            <div className="bg-white shadow-lg rounded-md flex flex-col justify-between h-64 pb-4">
              {/* Image */}
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-t-md"
                />
              </div>

              <div className="px-4">
                {/* Title + Badge + Percentage */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.verified && (
                      <Image
                        src={"/verified.png"}
                        height={20}
                        width={20}
                        alt="verified"
                      />
                    )}
                  </div>

                  {item.change && (
                    <span
                      className={`text-sm font-bold ${
                        item.isUp ? "text-green-500 mr-1" : "text-red-500"
                      }`}
                    >
                      {item.isUp ? "▲" : "▼"} {item.change}
                    </span>
                  )}
                </div>

                {/* Price & Market Cap */}
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Market Cap</p>
                    <p className="font-semibold">{item.marketCap}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {hottestData.map((_, index) => (
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
}
