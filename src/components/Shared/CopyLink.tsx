"use client";
import { LinkIcon } from "@heroicons/react/20/solid";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

export default function CopyLink() {
  const path = usePathname();
  const copylink = () => {
    navigator.clipboard.writeText(
      "https://www.perspectiva-comunista.ro" + path
    );
    toast.success("Link copiat in clipboard");
  };
  return (
    <div className="inline">
      <LinkIcon
        className="inline sm:ml-3 sm:w-14 w-10 text-red cursor-pointer"
        onClick={() => copylink()}
      />
    </div>
  );
}
