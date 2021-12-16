import Login from "@/components/login";
import Head from "next/head";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="container">
      <Head>
        <title>Meteverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the METAVERSE 5 DAY CHALLENGE PAPAFAM</h1>
    </div>
  );
}
