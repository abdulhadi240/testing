import StatisticCard from "@/components/StatisticCard";
import { AvatarCircles_component } from "./AvatarCircles_component";
import Card from "./Card";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
    <div className="md:mb-12">
      <h1 className="text-4xl text-center md:text-start md:text-5xl font-bold mb-2">
        Buy Memes.
        <br/>
        In Two Clicks.
      </h1>
      <p className="text-gray-600 text-center  md:text-start mb-8 max-w-[400px] text-xs  md:-mx-0 md:text-lg">
        The fastest way to buy memes in just two clicks.
        Under 1 minute to sign up and no wallet needed.
      </p>

      {/* Statistic Cards Section */}
      <div className="md:flex gap-4 md:mb-8 hidden">
      
        <StatisticCard
          title="Total users"
          value="52,630"
          avatar
          icon={<div className="w-2 h-2 rounded-full bg-[#22c55e]" />}
          percentage={<span className="text-sm text-gray-600">Total users</span>}
          iconClass="flex -space-x-1"
        />
        
        <StatisticCard
          title="Trade Volume"
          value="$1,288,314,266"
          icon={<div className="w-2 h-2 rounded bg-[#22c55e]" />}
          percentage={<span className="text-sm text-gray-600">Trade Volume</span>}
          iconClass="flex -space-x-1"
        />
      </div>
    </div>
    <div className="flex justify-center md:ml-14">
    <Card/>
    </div>
    </div>
  );
};

export default HeroSection;
