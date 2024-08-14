"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../components/Loading";

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
    <>
      <p>Perfil</p>
      <p>Você está logado com {data?.user?.name}</p>
      <button className="cursor-pointer" onClick={() => signOut()}>
        Sair
      </button>
    </>
  );
};

export default Profile;
