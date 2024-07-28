"use client";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState(
    searchParams.get("query")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0 lg:w-1/2 md:w-2/3 w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(value);
          }
        }}
      />

      <button
        onClick={(e: any) => {
          e.target.classList.add("focus:outline-2");
          handleSearch(value);
        }}
        className="bg-red text-white rounded px-6 ml-4 outline outline-1 outline-black"
      >
        Cauta
      </button>
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      {value && (
        <XMarkIcon
          className="absolute right-28 top-2 h-7 w-h-7 text-gray-500 peer-focus:text-gray-900 cursor-pointer"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.delete("page");
            params.delete("query");
            replace(`${pathname}?${params.toString()}`);
            setValue("");
          }}
        />
      )}
    </div>
  );
}
