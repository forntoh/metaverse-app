import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Button } from "./button";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative h-screen">
      <div className="flex flex-col absolute z-10 w-full items-center justify-center gap-8 h-screen my-auto">
        <Image
          src="https://links.papareact.com/3pi"
          className="rounded-full object-cover"
          width={256}
          height={256}
        />
        <p>Enter the #PAPAFAM Metaverse</p>
        <div>
          <Button label="Login" onClick={authenticate} />
        </div>
      </div>
    </div>
  );
}

export default Login;
