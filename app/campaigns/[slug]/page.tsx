("");

import Image from "next/image";
import { JoinSidebar } from "../../../components/Shared";
import { redirect } from "next/navigation";
import { getCampaign } from "../../../server/actions/campaigns";
import CopyLink from "@/components/Shared/CopyLink";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const campaign = await getCampaign(params.slug);

  if (!campaign) {
    return redirect("/not-found");
  }

  return {
    title: `Platforma LEFT - ${campaign.title}`,
    description: campaign.excerpt,
    openGraph: { images: campaign.imageUrl },
    twitter: {
      images: campaign.imageUrl,
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const campaign = await getCampaign(params.slug);

  if (!campaign) {
    return redirect("/not-found");
  }

  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <h2 className="text-4xl font-black mt-8 mb-4">Campanii</h2>
      <div className="md:hidden block">
        <Image
          src={campaign.imageUrl}
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
                {campaign.title}
                <CopyLink />
              </h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-base text-gray-600">29 Decembrie 2023</p>
                {/* <p className="text-base text-gray-600 flex gap-1">
                  <HeartIcon className="w-6 text-red-600" />
                {campaign.likes}
                </p> */}
              </div>
            </div>

            <p
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: campaign.excerpt }}
            />
          </div>

          <div className="md:block hidden">
            <Image
              src={campaign.imageUrl}
              alt="Posts"
              className="h-fit object-contain max-h-80"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16">
          <p
            className="text-lg lg:w-2/3 lg:mb-20 mb-10"
            dangerouslySetInnerHTML={{ __html: campaign.text }}
          />

          <div className="flex flex-col gap-3 lg:w-1/3 ">
            {/* <Image
              src="/images/alexandruradu. jpg"
              alt="Posts"
              className="object-contain h-fit"
              width={180}
              height={180}
              priority={true}
            />
            <h2 className="text-4xl font-black">Alexandru Radu</h2>
            <p className="text-base">
              Editor de film, absolvent al Universității Naționale de Artă
              Teatrală și Cinematografică, liber profesionist pentru mai bine de
              10 ani în domeniu cinematografic și apoi emigrant, interesat de
              îmbunătățirea condițiilor de lucru și viață a societății care l-a
              format, dornic de existența unui statut al artistului în România
              care să recunoască valoarea muncii tuturor celor care mențin
              cultura vie, care să susțină începutul de drum și care să ofere
              atenție și protecție împotrivă vulnerabilităților specifice
              diferitelor profesi artistice
            </p> */}

            <div className="sticky top-10 flex flex-col gap-10 py-4 h-fit">
              <JoinSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
