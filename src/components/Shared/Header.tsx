"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "../../utils/constants";
import Logo from "../../assets/images/logo-transparent.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const nav = useRef<any>();
  const navsMobile = () => {
    nav.current.classList.add("closing-animation");
    setTimeout(() => {
      return setIsMenuOpen(!isMenuOpen);
    }, 500);
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener("scroll", () => {
        setTimeout(() => {
          return setIsMenuOpen(false);
        }, 500);
      });
    }
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <header className="w-full bg-black">
      <div
        className="flex mx-auto lg:max-w-screen-xl justify-between items-center px-3 py-6 lg:gap-8 w-full"
        style={{ backgroundPosition: "0 center" }}
      >
        <button
          type="button"
          className="relative inline-flex lg:hidden items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg
            className="block h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="flex flex-col justify-between">
          <h1 className="lg:text-2xl text-xl text-white pb-6 lg:block hidden">
            "Ne trebuie, înainte de toate, un ziar; fără el este imposibilă
            <br />
            desfășurarea sistematică a unei ample activități de <br />{" "}
            propagandă și agitație principială" -- V.I. Lenin
          </h1>

          <nav className="lg:flex hidden justify-between items-center gap-6 ">
            {navigation.map((nav) => (
              <Link
                href={nav.id}
                key={nav.id}
                className={
                  "hover:scale-110 link link-underline link-underline-black " +
                  (pathname === nav.id || pathname.startsWith(nav.id + "/")
                    ? " scale-110 font-bold link-underline-hover"
                    : "")
                }
                target={nav.target}
              >
                <p className="text-white text-2xl m-0 ">{nav.name}</p>
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={250}
            className="object-contain lg:w-40 w-12 h-auto"
            priority
          />
        </Link>
      </div>

      <Link href="/" className="lg:hidden block relative">
        <h1 className="text-base text-white text-left px-4 pb-4">
          "Ne trebuie, înainte de toate, un ziar; fără el este imposibilă
          desfășurarea sistematică a unei ample activități de propagandă și
          agitație principială" -- V.I. Lenin
        </h1>
      </Link>

      {isMenuOpen && (
        <nav
          className="lg:hidden flex flex-col fixed top-0 w-3/4 h-fit px-5 py-10 justify-start gap-3 bg-black animation-nav transition-all z-20 rounded-ee-[150px]"
          ref={nav}
        >
          <button
            type="button"
            className="absolute top-4 left-3 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10 animate-spin-fast"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => navsMobile()}
          >
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="mt-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="pb-4 object-contain h-auto"
              priority
            />
          </Link>

          {navigation.map((nav) => (
            <Link
              href={nav.id}
              key={nav.id}
              target={nav.target}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={
                pathname === nav.id || pathname.startsWith(nav.id + "/")
                  ? " font-bold"
                  : ""
              }
            >
              <p className="text-white text-md">{nav.name}</p>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
