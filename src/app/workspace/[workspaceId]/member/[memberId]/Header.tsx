import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";

interface HeaderProps {
  memberName?: string;
  memberImage?: string;
  onClick?: () => void;
}

export const Header = ({
  memberName = "Member",
  memberImage,
  onClick,
}: HeaderProps) => {
  const avatarFallack = memberName.charAt(0).toUpperCase();
  return (
    <div className="bg-black border-black h-[49px] flex  items-center px-4 overflow-hidden">
      <Button
        variant="ghost"
        className="text-lg font-semibold px-2 overflow-hidden w-auto"
        size="sm"
        onClick={onClick}>
        <Avatar className="size-6 mr-2">
          <AvatarImage src={memberImage} />
          <AvatarFallback className="text-white rounded-md bg-sky-500">
            {avatarFallack}
          </AvatarFallback>
        </Avatar>
        <span className="truncate text-white hover:text-black">
          {memberName}
        </span>
        <FaChevronDown className="size-2.5 ml-2" />
      </Button>
    </div>
  );
};
