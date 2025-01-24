import { AvatarCircles_component } from "./AvatarCircles_component";

const StatisticCard = ({ title, value, icon, percentage, iconClass , avatar}) => {
    return (
      <div className="bg-[#f5f5f5] w-[318px] h-[90px] py-2 px-4 rounded-md">
        <div className="flex items-center gap-2 mb-2 mt-2">
          <div className={`flex -space-x-1 ${iconClass}`}>
            {icon}
          </div>
          <span className="text-sm text-gray-600">{title}</span>
        </div>
        <div className="flex gap-2 items-center mt-2">
        {avatar &&  <AvatarCircles_component/>}
        <p className="text-lg tracking-wider font-bold">{value}</p>
        </div>
      </div>
    );
  };
  
  export default StatisticCard;
  