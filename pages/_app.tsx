import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="body__wrapper">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
