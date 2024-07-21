"use client";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { AuthModal } from "../../components/Auth";
import { GeneralInfo } from "../../utils/types";
import { DocumentData } from "firebase/firestore";

export default function AuthBar({
  general,
}: {
  general: GeneralInfo | DocumentData | undefined;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const { width } = useWindowSize() as { width: number };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsLogin(true);
    setIsRegister(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      if (width > 750) document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
  }, [isModalOpen]);

  return (
    <div className="sticky top-0 z-20 bg-red shadow-md">
      <div className="flex mx-auto max-w-screen-xl justify-between items-center px-3 py-2">
        <Link href={general?.join.joinForm} target="_blank">
          <h2 className="text-lg m-0 text-white">
            Alătură-te LEFT &gt;&gt;&gt;
          </h2>
        </Link>
        <div
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
          className="relative"
        >
          <h3 className="text-lg text-white cursor-pointer">
            Creare / Înregistrare cont
          </h3>
          {isModalOpen && (
            <section
              className="fixed top-0 right-0 bottom-0 left-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="fixed w-full h-full opacity-20 bg-black"
                onClick={() => handleClose()}
              />
              <AuthModal
                isLogin={isLogin}
                isRegister={isRegister}
                setIsLogin={setIsLogin}
                setIsRegister={setIsRegister}
                handleClose={handleClose}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
