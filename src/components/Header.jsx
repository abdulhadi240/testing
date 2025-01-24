import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Twitter } from 'lucide-react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center px-8 py-4 border-b">
      <div className="flex items-center w-full justify-between md:justify-start">
        {/* Menu Icon */}
        <div className="md:hidden">
          <Menu />
        </div>

        {/* Logo - Centered on Mobile */}
        <div className="flex items-center mr-3 md:mr-0 justify-center flex-1 md:flex-none">
          <Image src={'/logo.png'} width={120} height={120} alt="logo" />
        </div>

        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center gap-2 bg-[#f2f2f2] px-4 py-2 rounded-full border-[#e5e5e5] border-[1px] w-full max-w-[400px]">
            <Search className="w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Search ai agents" className="bg-transparent outline-none w-full" />
            <div className="flex gap-0.5 bg-[#f5f5f5] border-[#e5e5e5] border-[1px] p-0.5 px-1">
              <div>
                <Image src={'/search_secondary_icon.png'} width={18} height={18} alt="search_secondary_icon" />
              </div>
              <p className="text-[9px] flex font-light text-[#737373] items-center">K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons - Hidden on Mobile */}
      <div className="hidden md:flex">
        <div className="flex gap-2 items-center mr-16">
        <Image src={'/twitter.svg'} width={22} height={20} alt="twitter" />
        <Image src={'/telegram.svg'} width={22} height={20} alt="twitter" />
        <Image src={'/screen.svg'} width={23} height={20} alt="screen" />
        </div>
        <Button className="bg-black rounded-sm text-white hover:bg-black/90">Start Buying</Button>
      </div>
    </header>
  );
};

export default Header;
