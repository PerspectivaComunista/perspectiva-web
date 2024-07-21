"use client";
import { navigation } from "../../utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../assets/images/logo.svg";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-red">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-5 py-2">
        <div className="lg:block hidden">
          <div className="flex gap-2 items-center">
            {navigation.map((link) => (
              <Link
                href={link.id}
                key={link.id}
                className={
                  "text-white border-r-2 border-white px-6 sm:px-2 text-md hover:scale-110" +
                  (pathname === link.id || pathname.startsWith(link.id + "/")
                    ? " font-bold"
                    : "")
                }
                target={link.target}
              >
                {link.name}
              </Link>
            ))}
            <Link href="https://www.buymeacoffee.com/platformaleft">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-6 py-1.5 text-sm font-semibold text-red shadow-sm hover-bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-white ml-1"
              >
                Donează
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:m-0 py-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
              className="lg:ml-auto md:w-14 w-24 object-contain h-auto"
              priority
            />
          </Link>
          <p className="text-white font-semibold lg:text-xs text-base py-2">
            © {new Date().getFullYear()} Platforma Left. Toate drepturile
            rezervate. <br /> Site realizat de &nbsp;
            <a
              href="https://linktr.ee/danielcorbix"
              className="border-b-[1px] border-white"
              target="_blank"
            >
              Daniel Corbix.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
