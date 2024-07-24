import { Post } from "../../utils/types";
import Image from "next/image";
import Link from "next/link";

export default function Better({ lastPost }: { lastPost: any }) {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto my-4 w-full">
      <div className="w-full">
        <div className="mt-2 flex items-center gap-x-4 text-md">
          <time dateTime={lastPost.datetime} className="text-gray-500">
            {lastPost.date}
          </time>
          <Link
            href="/"
            className=" relative z-10 rounded-full bg-red-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-red-300"
          >
            {lastPost.category.title}
          </Link>
        </div>
        <div className="group relative">
          <h3 className="mt-1 mb-3 text-3xl font-extrabold leading-6 text-gray-900 group-hover:text-gray-600">
            <span className="absolute inset-0" />
            {lastPost.title}
          </h3>
          <p className=" line-clamp-3 text-xl mb-1 leading-5 text-gray-600">
            {lastPost.description}
          </p>
        </div>

        <p className="text-gray-600 text-lg">de {lastPost.author.role}</p>
      </div>
      <Link href="/" className="w-2/3">
        <Image
          src={lastPost.imageUrl}
          alt="Posts"
          className="w-full shadow-2xl object-cover"
          width={1000}
          height={1000}
          priority
        />
      </Link>
    </div>
  );
}
