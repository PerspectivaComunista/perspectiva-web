"use client";
import Image from "next/image";
import Link from "next/link";
import getInstagramPosts from "./actions";
import { Instagram } from "@/utils/types";
import Pagination from "@/components/Shared/Pagination";
import { useEffect, useState } from "react";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [posts, setPosts] = useState<Instagram[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getInstagramPosts();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const postsImages = posts.filter(
    (e) => e.type === "IMAGE" || e.type === "CAROUSEL_ALBUM"
  );
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = postsImages.slice(start, end);
  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <h2 className="text-4xl font-black py-8">Postări Instagram</h2>

      <div className="sm:grid flex flex-col lg:grid-cols-4 md:grid-cols-3 w-full sm:grid-cols-2 gap-4 justify-items-center justify-between items-center mb-20">
        {entries.map((post: Instagram) => (
          <Link
            href={post.url}
            target="_blank"
            key={post.url}
            className="shadow-xl relative group overflow-hidden"
          >
            <Image
              src={post.imageUrl}
              width={300}
              height={300}
              className="w-full object-contain"
              alt={"posts"}
              priority
            />
            <div className="absolute bg-gray-700 bg-opacity-0 bottom-0 w-full h-3/4 p-4 pt-2 transition-all duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-85">
              {post.description && (
                <p
                  className="text-white text-xs whitespace-break-spaces h-full overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
              )}
            </div>
            <p className="text-white bg-red text-lg absolute bottom-0 py-1 pl-4 w-full transition-all duration-1000 ease-in-out transform -translate-x-full group-hover:translate-x-0">
              Vezi postarea &gt;&gt; &gt;
            </p>
          </Link>
        ))}
      </div>
      {postsImages.length > 12 && (
        <Pagination
          hasNextPage={end < postsImages.length}
          hasPrevPage={start > 0}
          length={postsImages.length}
          url="/media/instagram"
        />
      )}
    </main>
  );
}
