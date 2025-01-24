import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function HomePage() {
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

  return (
    <main className=" bg-white mb-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Hottest</h1>

      <div className="grid grid-cols-2 md:grid-cols-4  gap-36">
        {hottestData.map((item, index) => (
          <div key={index} className="bg-white shadow-lg w-56 h-64 flex flex-col justify-between rounded-md pb-4">
            {/* Top: Image - fixed height (e.g. h-32) */}
            <div className="relative w-full h-44 mb-4">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover rounded-t-md"
                sizes="(max-width: 768px) 50vw,
                       (max-width: 1200px) 25vw,
                       20vw"
              />
            </div>

            <div className="px-4">
              {/* Title + Badge + Percentage in one row */}
              <div className="flex items-center justify-between mb-2">
                {/* Left side: Name + Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.verified && (
                    <RiVerifiedBadgeFill size={20} color="#2081e2"/>
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
        ))}
      </div>
    </main>
  );
}
