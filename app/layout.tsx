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
  title: "Perspectiva Comunistă",
  description:
    "Scopul nostru este să clarificăm conceptele de bază, și să sugerăm materiale de lectură ✮",
  keywords:
    "Stânga politică România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Partid stânga România, Activism politic, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democrație, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică, Comunism, Marxism, Leninism, Socialism, Karl Marx, Friedrich Engels, Revoluția proletară, Egalitate socială, Clasa muncitoare, Lupta de clasă, Internaționalism, Proletariat, Partid comunist, Revoluție socială, Anti-capitalism, Planificare economică, Teorie marxistă, Utopie comunistă, Solidaritate muncitorească, Economie socialistă, Transformare socială, Istoria comunismului, Politică comunistă, Manifestul Comunist, Statul și Revoluția, Social-democrație, Justiție socială, Redistribuirea bogăției, Securitate socială, Drepturile muncitorilor, Economia mixtă, Statul bunăstării, Protecție socială, Partid socialist, Servicii publice, Educație gratuită, Asistență medicală universală, Economie participativă, Cooperativă muncitorească, Dezvoltare durabilă, Reformă socială, Materialism istoric, Teoria valorii muncii, Capitalul, Alienare, Supra-structură și infrastructură, Moduri de producție, Critica capitalismului, Ideologia marxistă, Economie politică, Socialism științific, Istoria marxismului, Dialectica marxistă, Leninism, Vladimir Lenin, Teoria imperialismului, Partidul avangardist, Dictatura proletariatului, Revoluția din Octombrie, Noua Politică Economică (NEP), Sovietul, Centralism democratic, Strategia și tactica revoluționară, Internaționala Comunistă (Comintern), Socialism într-o singură țară, Teoria statului și revoluției, Materialism dialectic, Proletariatul revoluționar, Dezvoltare socialistă, Politica leninistă, Istoria leninismului, Maoism, Mao Zedong, Revoluția Culturală, Lupta de clasă continuă, Războiul de gherilă, Marea Revoluție Proletară Culturală, Socialism rural, Lunga Marșă, Teoria celor trei lumi, Agricultura colectivizată, Critica revizionismului, Politica de masă, Unitatea dintre teorie și practică, Dezvoltarea comunistă, Strategia maoistă, Partidul Comunist Chinez, Ideologia maoistă, Istoria maoismului",
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
