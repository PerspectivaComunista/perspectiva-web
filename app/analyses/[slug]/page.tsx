import Image from "next/image";
import { JoinSidebar } from "../../../components/Shared";
import { redirect } from "next/navigation";
import { getAnalysis } from "../../../server/actions/analyses";
import CopyLink from "@/components/Shared/CopyLink";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const analysis = await getAnalysis(params.slug);

  if (!analysis) {
    return redirect("/not-found");
  }

  return {
    title: `Platforma LEFT - ${analysis.title}`,
    description: analysis.excerpt,
    openGraph: { images: analysis.imageUrl },
    twitter: {
      images: analysis.imageUrl,
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const analysis = await getAnalysis(params.slug);

  if (!analysis) {
    return redirect("/not-found");
  }

  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <h2 className="text-4xl font-black mt-8 mb-4">Articol</h2>
      <div className="md:hidden block">
        <Image
          src={analysis.imageUrl}
          alt="Posts"
          className="h-fit mb-10 object-contain"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-16">
          <div className="w-full">
            <div className="mb-5">
              <h2 className="text-4xl font-black inline">
                {analysis.title}
                <CopyLink />
              </h2>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <p className="text-base text-gray-600">
                    {analysis.createdAt}
                  </p>

                  <a
                    href="/"
                    className=" relative z-10 rounded-full bg-red-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-red-300"
                  >
                    Categorie
                  </a>
                </div>
                {/* <p className="text-base text-gray-600 flex gap-1">
                  <HeartIcon className="w-6 text-red-600" />
                {analysis.likes}
                </p> */}
              </div>
            </div>

            <p
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: analysis.excerpt }}
            />
          </div>

          <div className="md:block hidden w-[800px] h-96 relative">
            <Image
              src={analysis.imageUrl}
              alt="Posts"
              className="object-cover"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16">
          <p
            className="text-lg lg:w-2/3 lg:mb-20 mb-10"
            dangerouslySetInnerHTML={{ __html: analysis.text }}
          />

          <div className="flex flex-col gap-3 lg:w-1/3 ">
            <div className="sticky top-10 flex flex-col gap-10 py-4 h-fit">
              <JoinSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
