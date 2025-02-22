"use client"

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const MeusImoveis = () => {
  const {data,status} = useSession();
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
    <div>
      <Header />

      <ToastContainer aria-label="Notificações" />

      teste
    </div>
   );
}
 
export default MeusImoveis;