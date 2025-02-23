"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useFetchImmobilesByUserId } from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { CustomSession } from "../api/auth/[...nextauth]/route";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Eye, Trash } from "lucide-react";

const MeusImoveis = () => {
  const { data, status } = useSession();
  const userId = (data as CustomSession)?.user.id;
  const router = useRouter();
  const { immobiles } = useFetchImmobilesByUserId(userId);

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

      <div className="p-4">
        <div className="flex items-center gap-2">
          <p>Buscar Imóvel: </p>
          <input className="border" />

          <div className="w-40 h-8">
            <Button text="Buscar" type="button" color="#33ccff" />
          </div>

          <a href="/cadastro-imovel" className="w-40 h-8">
            <div className="w-40 h-full">
              <Button text="Cadastrar Imóvel" type="button" color="#33ccff" />
            </div>
          </a>
        </div>
      </div>

      <div className="px-4">
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
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          {immobiles?.map((immobile) => (
            <TableBody key={immobile.id}>
              <TableRow>
                <TableCell className="font-medium">{immobile.id}</TableCell>
                <TableCell>
                  <Image
                    src={immobile.image_url[0]}
                    alt={immobile.title}
                    width={48}
                    height={48}
                    className="h-12"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </TableCell>
                <TableCell>{immobile.title}</TableCell>
                <TableCell>{immobile.city}</TableCell>
                <TableCell>{immobile.state}</TableCell>
                <TableCell>{immobile.district}</TableCell>
                <TableCell>{immobile.type}</TableCell>
                <TableCell>{immobile.purpose}</TableCell>
                <TableCell>{immobile.status}</TableCell>
                <TableCell className="text-right">
                  R$ {immobile.price}
                </TableCell>
                <TableCell />
                <TableCell className="flex gap-4">
                  <Eye color="#33ccff"/>
                  <Trash color="red" />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MeusImoveis;
