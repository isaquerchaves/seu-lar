"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  telefone: number;
  cidade: string;
  estado: string;
}

const Profile = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  const onSubmit = (formData: IFormInput) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-between mt-10 h-full w-full">
      <h1 className="text-4xl font-bold">Crie sua Conta</h1>

      <Avatar className="mt-10">
        <AvatarImage src={data?.user?.image || undefined} />
        <AvatarFallback>{data?.user?.name}</AvatarFallback>
      </Avatar>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-between p-10 h-full"
      >
        <p className="font-medium">Informações da conta</p>

        <Input
          label="Nome"
          type="text"
          placeholder={data?.user?.name || ""}
          disabled
          {...register("name")}
        />
        <Input
          label="Email"
          type="text"
          placeholder={data?.user?.email || ""}
          disabled
          {...register("email")}
        />

        <div className="flex gap-4 ">
          <Input label="CRECI" type="text" name="creci" placeholder="12345" />
          <Input
            label="Telefone"
            type="number"
            placeholder="99999999999"
            {...register("telefone")}
          />
        </div>

        <div className="flex gap-4">
          <Input
            label="Cidade"
            type="text"
            placeholder="Imperatriz"
            {...register("cidade")}
          />
          <Input
            label="Estado"
            type="text"
            placeholder="MA"
            {...register("estado")}
          />
        </div>

        <div className="flex flex-col items-center gap-3 w-full pt-4">
          <Button text="Salvar" color="#33ccff" type="submit" />
          <Button
            text="Sair"
            color="#ff6666"
            type="button"
            onClick={() => signOut()}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
