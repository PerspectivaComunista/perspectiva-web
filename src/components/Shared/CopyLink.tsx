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
        className="inline ml-3 w-14 text-red cursor-pointer"
        onClick={() => copylink()}
      />
    </div>
  );
}
