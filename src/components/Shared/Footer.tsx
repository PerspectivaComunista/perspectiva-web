"use client";
import { navigation } from "../../utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../assets/images/logo-round.png";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-black">
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
            © {new Date().getFullYear()} Perspectiva Comunistă. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
