import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina nu a fos gasita...",
};

export default function NotFound() {
  return (
    <main className="isolate min-h-full my-8">
      <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
        <p className="text-base font-semibold leading-8 text-black">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Pagina nu a fost gasita
        </h1>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="text-xl font-semibold leading-7 text-black">
            <span aria-hidden="true">&larr;</span> Acasa
          </Link>
        </div>
      </div>
    </main>
  );
}
