import "@/styles/globals.css";
import Navbar from "./navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="logo.webp" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
