const { getFirestore } = require("firebase-admin/firestore");
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Shared/Pagination";
import { useEffect, useState } from "react";
import { firebaseServerApp } from "@/utils/firebase/server";
import { Post } from "@/utils/types";

const getYoutubes = async (): Promise<Post[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("youtube").get();
  const youtube = response.docs.map((doc: any) => doc.data()) as Post[];
  youtube.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return youtube;
};

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const posts = await getYoutubes();

  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = posts.slice(start, end);
  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <h2 className="text-4xl font-black py-8">Postări Youtube</h2>

      <div className="sm:grid flex flex-col lg:grid-cols-4 md:grid-cols-3 w-full sm:grid-cols-2 gap-4 justify-items-center justify-between items-center mb-20">
        {entries.map((post: Post) => (
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
            <p className="text-white bg-red text-lg absolute bottom-0 py-1 pl-4 w-full transition-all duration-1000 ease-in-out transform -translate-x-full group-hover:translate-x-0">
              Vezi postarea &gt;&gt; &gt;
            </p>
          </Link>
        ))}
      </div>
      {posts.length > 12 && (
        <Pagination
          hasNextPage={end < posts.length}
          hasPrevPage={start > 0}
          length={posts.length}
          url="/media/youtube"
        />
      )}
    </main>
  );
}
