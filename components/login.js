import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Button } from "./button";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative h-screen">
      <div className="flex flex-col absolute z-10 h-4/6 w-full items-center justify-center gap-8">
        <Image
          src="https://links.papareact.com/3pi"
          className="rounded-full object-cover"
          width={300}
          height={300}
        />
        <div>
          <Button label="Login" onClick={authenticate} />
        </div>
      </div>
      <div className="w-full h-screen absolute">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
