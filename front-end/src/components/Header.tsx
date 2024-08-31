import { useSession } from "next-auth/react";
import Button from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { data, status } = useSession();

  return (
    <header className="bg-[#E8E9ED] flex flex-row justify-between p-4 items-center px-10 h-16 shadow-lg">
      <p className=" text-[#33ccff] font-bold text-lg">Seu Lar</p>

      <nav>
        <ul className="flex flex-row gap-16">
          <li>
            <a
              href="/"
              className="relative transition-colors duration-300 ease-in-out hover:text-[#33ccff] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#33ccff] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="/"
              className="relative transition-colors duration-300 ease-in-out hover:text-[#33ccff] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#33ccff] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Imóveis
            </a>
          </li>
          <li>
            <a
              href="/"
              className="relative transition-colors duration-300 ease-in-out hover:text-[#33ccff] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#33ccff] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Corretores
            </a>
          </li>
        </ul>
      </nav>

      {status === "unauthenticated" ? (
        <div className="w-32 h-9 ">
          <Button text="Login" type="button" color="#33ccff" />
        </div>
      ) : (
        <a href="/profile">
          <Avatar className="w-9 h-9">
            <AvatarImage src={data?.user?.image || undefined} />
            <AvatarFallback>{data?.user?.name}</AvatarFallback>
          </Avatar>
        </a>
      )}
    </header>
  );
};

export default Header;
