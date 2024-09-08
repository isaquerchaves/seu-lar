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
      key={profile.user_id}
      href={`/agent/${profile.creci}`}
      className="p-2 flex flex-col gap-2 border mt-4 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Avatar className="w-10 h-10">
            <AvatarImage src={profile?.User?.image || undefined} />
            <AvatarFallback>{profile?.User?.image}</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-bold text-lg">{profile?.User?.name}</p>
            <p className="font-semibold text-gray-500">
              CRECI - {profile.creci}
            </p>
          </div>
        </div>

        <Link href={`/agent/#`}>
          <ExternalLink color="#808080" />
        </Link>
      </div>

      <Separator />

      <div className="flex flex-row w-screen">
        <div className="flex gap-2 items-center w-[50%]">
          <MapPinned size={20} color="#33ccff" />
          <p>
            {profile.city}-{profile.state}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={20} color="#33ccff" />
          <p>{profile.phone}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <AtSign size={20} color="#33ccff" />
        <p>{profile.User?.email}</p>
      </div>
    </Link>
  );
};

export default AgentCard;
