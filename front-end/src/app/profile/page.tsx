"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFetchProfile } from "@/hooks/useFetch";
import { CustomSession } from "../api/auth/[...nextauth]/route";
import { createProfile, updateProfile } from "@/services/service";
import Header from "@/components/Header";

interface IFormInput {
  creci: string;
  phone: string;
  city: string;
  state: string;
}

// Yup validação
const schema = yup.object().shape({
  creci: yup.string().required("Preencha o CRECI"),
  phone: yup
    .string()
    .typeError("Preencha o Telefone")
    .required("Preencha o Telefone"),
  city: yup.string().required("Preencha a Cidade"),
  state: yup.string().required("Preencha o Estado"),
});

const Profile = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const userId = (data as CustomSession)?.user?.id;
  const { profile } = useFetchProfile(userId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    // Preencher o formulário com os dados do perfil, se disponíveis
    if (profile) {
      setValue("creci", profile.creci || "");
      setValue("phone", profile.phone || "");
      setValue("city", profile.city || "");
      setValue("state", profile.state || "MA");
    }
  }, [profile, setValue]);

  if (status === "loading") {
    return <Loading />;
  }

  const onSubmit = async (formData: IFormInput) => {
    try {
      if (userId) {
        const profileData = { ...formData, user_id: userId };

        if (profile) {
          await updateProfile(userId, profileData);
          alert("Perfil atualizado com sucesso!");
        } else {
          await createProfile(profileData);
          alert("Perfil criado com sucesso!");
        }

        router.refresh();
      }
    } catch (error) {
      console.error("Erro ao salvar perfil: ", error);
      alert("Erro ao salvar perfil. Tente novamente.");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-between mt-10 h-full w-full">
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
            <div className="flex flex-col w-full">
              <Input
                label="CRECI"
                type="text"
                placeholder="12345"
                {...register("creci")}
              />
              {errors.creci && (
                <p className="pt-1 pl-1 text-xs font-medium text-red-500 w-full">
                  {errors.creci.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <Input
                label="Telefone"
                type="number"
                placeholder="99999999999"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="pt-1 pl-1 text-xs font-medium text-red-500 w-full">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <Input
                label="Cidade"
                type="text"
                placeholder="Imperatriz"
                {...register("city")}
              />
              {errors.city && (
                <p className="pt-1 pl-1 text-xs font-medium text-red-500 w-full">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* Select para Estado */}
            <div className="flex flex-col w-full">
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
            {errors.state && (
              <p className="pt-1 pl-1 text-xs font-medium text-red-500 w-full">
                {errors.state.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-3 w-full pt-4">
            <div className="h-[50px] w-full">
              <Button text="Salvar" color="#33ccff" type="submit" />
            </div>
            <div className="h-[50px] w-full">
              <Button
                text="Sair"
                color="#ff6666"
                type="button"
                onClick={() => signOut()}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
