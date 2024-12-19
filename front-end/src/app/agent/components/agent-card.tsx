import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Profile } from "@/services/service";
import { AtSign, ExternalLink, MapPinned, Phone } from "lucide-react";
import Link from "next/link";

interface ProfileProps {
  profile: Profile;
}

const AgentCard = ({ profile }: ProfileProps) => {
  return (
    <Link
      href={`/agent/${profile.creci}`}
      className="p-4 flex flex-col gap-2 border rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95"
    >
      <div className="flex justify-between items-center lg:justify-center lg:relative">
        <div className="flex gap-2 items-center  lg:flex lg:flex-col">
          <Avatar className="w-10 h-10 lg:w-[50px] lg:h-[50px]">
            <AvatarImage src={profile?.userData?.image || undefined} />
            <AvatarFallback>{profile?.userData?.image}</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-bold text-lg">{profile?.userData?.name}</p>
            <p className="font-semibold text-gray-500">
              CRECI - {profile.creci}
            </p>
          </div>
        </div>

        <Link href={`/agent/#`} className="lg:absolute lg:top-1 lg:right-1">
          <ExternalLink color="#808080" />
        </Link>
      </div>

      <Separator />

      <div className="flex flex-row truncate">
        <div className="flex gap-2 items-center w-[50%]">
          <MapPinned size={20} color="#33ccff" />
          <p>
            {profile.city}-{profile.state}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={20} color="#33ccff" />
          <p className="">{profile.phone}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <AtSign size={20} color="#33ccff" />
        <p className="truncate">{profile.userData?.email}</p>
      </div>
    </Link>
  );
};

export default AgentCard;
