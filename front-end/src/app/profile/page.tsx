"use client"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Profile = () => {
    const { data } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!data) {
            router.push('/login')
        }
    }, [data, router]);

    return ( 
    <>
        <p>Perfil</p>
        <p>Você está logado com {data?.user?.name}</p>
        <button className="cursor-pointer" onClick={() => signOut()}>Sair</button>
    </> );
}
 
export default Profile;