"use client"

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useFetchImmobilesByUserId } from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { CustomSession } from "../api/auth/[...nextauth]/route";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

const MeusImoveis = () => {
  const {data,status} = useSession();
  const userId = (data as CustomSession)?.user.id;
  const router = useRouter();
  const {immobiles} = useFetchImmobilesByUserId(userId);

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
      <div className="pt-4">
      <Table>
        <TableCaption>Lista com seus imóveis cadastrados.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Imagem</TableHead>
            <TableHead>Título</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Bairro</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Proposta</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        {immobiles?.map( (immobile) => (
          <TableBody key={immobile.id}>
          <TableRow>
            <TableCell className="font-medium">{immobile.id}</TableCell>
            <TableCell>
              <Image 
                src={immobile.image_url[0]}
                alt={immobile.title}
                width={30}
                height={30}
              />
            </TableCell>
            <TableCell>{immobile.title}</TableCell>
            <TableCell>{immobile.city}</TableCell>
            <TableCell>{immobile.state}</TableCell>
            <TableCell>{immobile.district}</TableCell>
            <TableCell>{immobile.type}</TableCell>
            <TableCell>{immobile.purpose}</TableCell>
            <TableCell>{immobile.status}</TableCell>
            <TableCell className="text-right">R$ {immobile.price}</TableCell>
          </TableRow>
        </TableBody>
        ))}
      </Table>
      </div>
    </div>
   );
}
 
export default MeusImoveis;