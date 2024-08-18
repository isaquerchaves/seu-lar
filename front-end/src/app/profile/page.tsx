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
  creci: string;
  phone: number;
  city: string;
  state: string;
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
        />
        <Input
          label="Email"
          type="text"
          placeholder={data?.user?.email || ""}
          disabled
        />

        <div className="flex gap-4 ">
          <Input
            label="CRECI"
            type="text"
            placeholder="12345"
            {...register("creci")}
          />
          <Input
            label="Telefone"
            type="number"
            placeholder="99999999999"
            {...register("phone")}
          />
        </div>

        <div className="flex gap-4">
          <Input
            label="Cidade"
            type="text"
            placeholder="Imperatriz"
            {...register("city")}
          />
          {/* Select para Estado */}
          <label className="w-full border border-gray-300 rounded-md p-2 mt-2 shadow-md bg-white">
            <div className="flex flex-row text-sm font-medium border-none">
              <p className="min-w-16">Estado*</p>
              <select
                {...register("state")}
                className="pl-4 w-full border-none focus:outline-none"
                defaultValue="MA"
              >
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
          </label>
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
