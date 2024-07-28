import Link from "next/link";
import Image from "next/image";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Youtube from "../../assets/images/youtube.svg";
import Tiktok from "../../assets/images/tiktok.svg";
import Discord from "../../assets/images/discord.svg";

export default async function JoinSidebar() {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/LEFT-Libertate-Egalitate-Fraternitate-Toleran%C8%9B%C4%83/100095630493224/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/platforma.left/",
      icon: Instagram,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@LEFT-Romania",
      icon: Youtube,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@left.romania",
      icon: Tiktok,
    },
    {
      name: "Discord",
      url: "https://discord.com/invite/zJDTzjYbSj",
      icon: Discord,
    },
  ];
  return (
    <>
      <Link href="https://www.buymeacoffee.com/platformaleft" target="_blank">
        <h2 className="font-black text-3xl hover:text-gray-500">Donează</h2>
      </Link>

      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeYj2hqu6AcL9-K0wI2SzupoH-wDxPnIqGeFKC9-mBKGzCVeg/viewform"
        target="_blank"
      >
        <h2 className="font-black text-3xl hover:text-gray-500">
          Devino Membru
        </h2>
      </Link>

      <h2 className="font-black text-2xl">
        Ia legătura cu coordonatorii platformei LEFT
      </h2>

      <Link href="mailto:contact@left.org.ro " target="_blank">
        <h2 className="font-black text-2xl hover:text-gray-500">
          e-mail: <br /> contact@left.org.ro
        </h2>
      </Link>

      <div className="flex gap-4 justify-between">
        {socials.map((social) => (
          <Link
            href={social.url}
            key={social.url}
            className="hover:scale-150 transition-all"
            target="_blank"
          >
            <div className="flex items-center gap-2 hover:text-gray-500">
              <Image
                src={social.icon}
                alt={social.name}
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
