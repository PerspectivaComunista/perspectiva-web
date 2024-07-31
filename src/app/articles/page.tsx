const { getFirestore } = require("firebase-admin/firestore");
import { Suspense } from "react";
import { Metadata } from "next";
import { firebaseServerApp } from "@/utils/firebase/server";
import { Article } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Shared/Pagination";
import Search from "@/components/Shared/Search";

export const metadata: Metadata = {
  title: "Articole - Perspectiva Comunistă",
};

const getArticles = async (): Promise<Article[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("articles").get();
  const articles = response.docs.map((doc: any) => doc.data()) as Article[];
  articles.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return articles;
};

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
    query?: string;
    page?: string;
  };
}) {
  let articles = await getArticles();
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = articles.slice(start, end);

  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <div className="mt-4">
        <Search placeholder="Cauta articole..." />
        {articles.length !== 0 && (
          <h2 className="text-4xl font-black mt-4 mb-4">Articole</h2>
        )}
      </div>

      <Suspense>
        <div className="flex flex-col gap-10 mb-4">
          {entries.map((article) => (
            <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto my-4">
              <div className="sm:hidden block">
                <Link href={"/articles/" + article.slug}>
                  <Image
                    src={article.coverUrl}
                    alt="Posts"
                    className="md:w-1/2 w-full shadow-2xl object-cover"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>

              <div className="sm:w-2/3 w-full">
                <Link href={"/articles/" + article.slug}>
                  <h2 className="text-4xl font-black hover:text-gray-500">
                    {article.title}
                  </h2>
                </Link>
                <h4
                  className="my-4 text-base line-clamp-[9]"
                  dangerouslySetInnerHTML={{
                    __html: article.text.slice(0, 1100) + "...",
                  }}
                />
              </div>

              <Link
                href={"/articles/" + article.slug}
                className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden"
              >
                <Image
                  src={article.coverUrl}
                  alt="Posts"
                  width={500}
                  height={500}
                  priority={true}
                  className="shadow-2xl object-cover max-h-72"
                />
              </Link>
            </div>
          ))}
          {articles.length === 0 && (
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold mb-4">
                Nu am găsit niciun rezultat
              </h2>
              <p className="text-lg">
                Încearcă să cauți altceva sau să schimbi termenii de căutare.
              </p>
            </div>
          )}
        </div>
      </Suspense>

      {articles.length > 12 && (
        <Pagination
          hasNextPage={end < articles.length}
          hasPrevPage={start > 0}
          length={articles.length}
          url="/articles"
        />
      )}
    </main>
  );
}
