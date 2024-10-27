import { Poppins } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from 'react-hot-toast';
import Providers from "@/app/Providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Electrocréditos el Ahorro",
  description: "Ecommerce Electrocréditos",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-900`}>
        <Providers>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow container mx-auto  md:px-0">{children}</main>
            <Footer />
          </div>
        </CartProvider>
        </Providers>
       
        <Toaster
          toastOptions={{
            style: {
              background: '#fffff',
              color: "#00000",
            },
          }}
        />
      </body>
    </html>
  );
}
