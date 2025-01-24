import { AvatarCircles } from "@/components/ui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
  },
];

export function AvatarCircles_component() {
  return <AvatarCircles avatarUrls={avatars} />;
}
