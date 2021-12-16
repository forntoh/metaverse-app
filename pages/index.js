import { Button } from "@/components/button";
import Login from "@/components/login";
import Head from "next/head";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="container h-screen flex flex-col items-center justify-center gap-12 my-auto">
      <Head>
        <title>Meteverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-center">Welcome to the METAVERSE 5 DAY CHALLENGE</h2>
      User ID: {user.id}
      <Button label="Logout" onClick={logout} />
    </div>
  );
}
