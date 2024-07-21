("");

import { Suspense } from "react";
import type { Metadata } from "next";
import { Pagination, Search } from "../../components/Shared";
import { CampaignTemplate } from "../../components/Shared/Templates";
import { getCampaigns } from "../../server/actions/campaigns";

export const metadata: Metadata = {
  title: "Platforma LEFT - Campanii",
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
  let campaigns = await getCampaigns();

  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = campaigns.slice(start, end);

  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <div className="mt-4">
        <Search placeholder="Cauta campanii..." />
        {campaigns.length !== 0 && (
          <h2 className="text-4xl font-black mt-4 mb-4">Campanii</h2>
        )}
      </div>

      <Suspense>
        <div className="flex flex-col gap-10 mb-4">
          {entries.map((campaign) => (
            <CampaignTemplate campaign={campaign} key={campaign.slug} />
          ))}
          {campaigns.length === 0 && (
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
      {campaigns.length > 12 && (
        <Pagination
          hasNextPage={end < campaigns.length}
          hasPrevPage={start > 0}
          length={campaigns.length}
        />
      )}
    </main>
  );
}
