import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";

interface PhotoProfileProps {
  avatar: string
}

const PhotoProfile: React.FC<PhotoProfileProps> = ({ avatar }) => {
  return (
    <Avatar className="border-2 border-[#0571E1] w-24 h-24">
      <AvatarImage src={avatar} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default PhotoProfile;