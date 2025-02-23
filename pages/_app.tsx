import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="h-screen bg-white">
      {router.pathname==="/" ?"":
      <Header />
}
      <Component {...pageProps} />
    </div>
  );
}
