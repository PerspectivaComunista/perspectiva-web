import { Article, Author } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function Better({
  lastPost,
  authors,
}: {
  lastPost: Article;
  authors: Author[];
}) {
  return (
    <div className="flex sm:flex-row flex-col-reverse first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto my-4 w-full">
      <div className="w-full">
        <div className="mt-2 flex items-center gap-x-4 text-md">
          <time dateTime={lastPost.createdAt} className="text-gray-500">
            {lastPost.createdAt}
          </time>
          <Link
            href={"/category/" + lastPost.category}
            className=" relative z-10 rounded-full bg-red-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-red-300"
          >
            {lastPost.category}
          </Link>
        </div>
        <div className="group relative">
          <h3 className="mt-1 mb-3 text-4xl font-extrabold leading-10 text-black group-hover:text-gray-600">
            <span className="absolute inset-0" />
            {lastPost.title}
          </h3>
          <p
            className=" line-clamp-[12] sm:text-xl text-base mb-1 leading-5 text-gray-600"
            dangerouslySetInnerHTML={{ __html: lastPost.text + "..." }}
          ></p>
        </div>

        <p className="text-gray-600 text-lg font-bold">
          de {authors.find((e) => e.id === lastPost.author)?.shortName}
        </p>
      </div>
      <Link href="/" className="sm:w-2/3">
        <Image
          src={lastPost.coverUrl}
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
