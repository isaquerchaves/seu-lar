"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../components/Loading";

export default function Home() {
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
      <p>Home</p>
      <p>{data?.user?.name}</p>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
