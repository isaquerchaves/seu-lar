"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import Header from "@/components/Header";

export default function Home() {
  const { status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <p>Home</p>
    </>
  );
}
