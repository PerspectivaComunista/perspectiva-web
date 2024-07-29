import Image from "next/image";
import React from "react";

const Logo = require("@/assets/images/logo-round.png");

export default function page() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="mx-auto w-fit -mt-20">
          <Image src={Logo} alt="Logo" width={200} height={200} />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Conținut în lucru
        </h1>
        <p className="mt-6 text-xl leading-7 text-gray-600">
          Conținutul acestei pagini este în lucru. Vă rugăm să reveniți mai
          târziu.
        </p>
      </div>
    </main>
  );
}
