"use client"
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const {data} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push('/login')
    }
  }, [data, router]);

  return (
    <>
      <p>Home</p>
      <p>{data?.user?.name}</p>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
