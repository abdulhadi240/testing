"use client";;
import { cn } from "@/lib/utils";
import Image from "next/image";

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  return (
    (<div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
            key={index}
            className="rounded-full border-2 border-[#0a0a0a] dark:border-gray-800"
            src={url.imageUrl}
            width={30}  // Set appropriate width
            height={30} // Set appropriate height
            alt={`Avatar ${index + 1}`}
            quality={100} // Maximize image quality
            priority={true} // Optional: if you want to prioritize loading this image
          />
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href="">
          +{numPeople}
        </a>
      )}
    </div>)
  );
};
