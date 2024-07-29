const { getFirestore } = require("firebase-admin/firestore");
import Image from "next/image";
import { redirect } from "next/navigation";
import CopyLink from "@/components/Shared/CopyLink";
import { firebaseServerApp } from "@/utils/firebase/server";
import { Article } from "@/utils/types";
import { HeartIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const getArticles = async (slug: string): Promise<Article> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db
    .collection("articles")
    .where("slug", "==", slug)
    .get();
  const article = response.docs[0].data();

  return article;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticles(params.slug);

  if (!article) {
    return redirect("/not-found");
  }

  return {
    title: `${article.title} - Perspectiva Comunistă`,
    description: article.text.slice(0, 160),
    openGraph: { images: article.coverUrl },
    twitter: {
      images: article.coverUrl,
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const article = await getArticles(params.slug);

  if (!article) {
    return redirect("/not-found");
  }

  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <Image
        src={article.coverUrl}
        alt="Posts"
        className="w-full h-fit mb-10 object-contain"
        width={400}
        height={400}
        priority
      />

      <div className="flex flex-col">
        <div className="flex gap-16">
          <div className="w-full">
            <div className="flex justify-between items-center mt-2 ">
              <h2 className="text-6xl font-black inline">
                {article.title}
                <CopyLink />
              </h2>
            </div>
            <div className="mb-5">
              <div className="mt-2 flex items-center gap-x-4 text-xs">
                <time
                  dateTime={article.createdAt}
                  className="text-gray-600 text-base"
                >
                  {article.createdAt}
                </time>
                <Link
                  href={"/category/" + article.category}
                  className=" relative z-10 rounded-full bg-red-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-red-300"
                >
                  {article.category}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16">
          <p
            className="text-lg lg:mb-20 mb-10"
            dangerouslySetInnerHTML={{ __html: article.text }}
          />
        </div>
      </div>
    </main>
  );
}
