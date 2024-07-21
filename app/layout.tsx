import "../assets/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "sonner";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Header, Footer } from "../components/Shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platforma LEFT",
  description:
    "O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024",
  keywords:
    "Stânga politică România, LEFT România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Toleranță socială, Partid stânga România, Activism politic, Mișcarea LEFT, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democratie participativa, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "relative"}>
        <Toaster position="top-center" richColors />
        {/* <AuthBar general={general} /> */}
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
