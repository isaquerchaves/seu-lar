import { signOut, useSession } from "next-auth/react";
import Button from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";

const Header = () => {
  const { data, status } = useSession();

  const [isMdScreenOrLarger, setIsMdScreenOrLarger] = useState<boolean>(false);

  useEffect(() => {
    // Função para verificar o tamanho da tela e atualizar o estado
    const checkScreenSize = () => {
      const mdScreenOrLarger = window.innerWidth >= 768;
      setIsMdScreenOrLarger(mdScreenOrLarger);
    };

    // Verifica o tamanho da tela quando o componente é montado
    checkScreenSize();

    // Adiciona um event listener para o evento de redimensionamento da janela
    window.addEventListener("resize", checkScreenSize);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Verifica se o código está sendo executado no lado do cliente
    if (typeof window !== "undefined") {
      const mdScreenOrLarger = window.innerWidth >= 768;
      setIsMdScreenOrLarger(mdScreenOrLarger);
    }
  }, []);

  return (
    <header className="bg-[#E8E9ED] flex flex-row justify-between p-4 items-center px-10 h-16 shadow-lg">
      {isMdScreenOrLarger ? (
        <>
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
                  href="/agent"
                  className="relative transition-colors duration-300 ease-in-out hover:text-[#33ccff] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#33ccff] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Corretores
                </a>
              </li>
            </ul>
          </nav>

          {status === "unauthenticated" ? (
            <a href="/profile">
              <div className="w-32 h-9 ">
                <Button text="Login" type="button" color="#33ccff" />
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-4">
              <a href="/profile">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={data?.user?.image || undefined} />
                  <AvatarFallback>{data?.user?.name}</AvatarFallback>
                </Avatar>
              </a>

              <button
                className="w-full flex items-center gap-2 my-4"
                onClick={() => {
                  signOut();
                }}
              >
                <LogOutIcon size={20} />
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <p className=" text-[#33ccff] font-bold text-lg">Seu Lar</p>

          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              {status == "unauthenticated" && (
                <a
                  href="/login"
                  className="w-full flex items-center gap-3 my-4"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </a>
              )}

              {status == "authenticated" && (
                <div>
                  <div className="flex item-center gap-3 py-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={data?.user?.image || undefined} />
                      <AvatarFallback>{data?.user?.name}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <p className="font-medium">{data?.user?.name}</p>
                      <a
                        href="/profile"
                        className="text-sm opacity-75 underline"
                      >
                        Editar Perfil
                      </a>
                    </div>
                  </div>

                  <button
                    className="w-full flex items-center gap-2 my-4"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <LogOutIcon size={16} />
                    Fazer Logout
                  </button>
                </div>
              )}
              <nav>
                <ul className="flex flex-col gap-2">
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
                      href="/agent"
                      className="relative transition-colors duration-300 ease-in-out hover:text-[#33ccff] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#33ccff] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Corretores
                    </a>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </>
      )}
    </header>
  );
};

export default Header;
