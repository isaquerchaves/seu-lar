"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const Profile = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-between mt-10 h-full w-full">
      <h1 className="text-4xl font-bold">Crie sua Conta</h1>

      <Avatar className="mt-10">
        <AvatarImage src={data?.user?.image || undefined} />
        <AvatarFallback>{data?.user?.name}</AvatarFallback>
      </Avatar>

      <form className="flex flex-col gap-2 justify-between p-10 h-full">
        <p className="font-medium">Informações da conta</p>

        <Input
          label="Nome"
          type="text"
          name="name"
          placeholder={data?.user?.name || ""}
          disabled
        />
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder={data?.user?.email || ""}
          disabled
        />

        <div className="flex gap-4 ">
          <Input label="CRECI" type="text" name="creci" placeholder="12345" />
          <Input
            label="Telefone"
            type="number"
            name="telefone"
            placeholder="99999999999"
          />
        </div>

        <div className="flex gap-4">
          <Input
            label="Cidade"
            type="text"
            name="cidade"
            placeholder="Imperatriz"
          />
          <Input label="Estado" type="text" name="estado" placeholder="MA" />
        </div>
      </form>

      <div className="flex flex-col items-center gap-3 w-full px-10 md:w-[675px]">
        <Button text="Salvar" color="#33ccff" />
        <Button
          text="Sair"
          color="#ff6666"
          type="button"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
};

export default Profile;
