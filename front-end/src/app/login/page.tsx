import Image from "next/image";

const Login = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#33ccff] md:flex-row md:bg-gray-100">
      <div className="flex flex-col justify-center items-center md:bg-[#33ccff] md:justify-center md:w-[500px]">
        <Image src="/logo.png" alt="Seu Lar Logo" width="400" height="400" />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 md:gap-5 md:w-full">
        <p className="text-xl text-white md:text-black">
          Olá! Faça o Login com sua conta Google
        </p>
        <div className="flex flex-col justify-center items-center">
          <button className="flex gap-1 items-center bg-white border border-white px-4 py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer">
            <Image src="/google.webp" alt="Google" width={30} height={30} />
            <p>Entrar com o Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
