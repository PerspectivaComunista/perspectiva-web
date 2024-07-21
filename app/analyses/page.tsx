import { AnalysisTemplate, Search } from "../../components/Shared";
import { Suspense } from "react";
import { Pagination } from "../../components/Shared";
import { getAnalyses } from "../../server/actions/analyses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platforma LEFT - Analize",
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
  let analyses = await getAnalyses();
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = analyses.slice(start, end);

  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <div className="mt-4">
        <Search placeholder="Cauta analiza..." />
        {analyses.length !== 0 && (
          <h2 className="text-4xl font-black mt-4 mb-4">Analize</h2>
        )}
      </div>

      <Suspense>
        <div className="flex flex-col gap-10 mb-4">
          {entries.map((analysis) => (
            <AnalysisTemplate analysis={analysis} key={analysis.slug} />
          ))}
          {analyses.length === 0 && (
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
      {analyses.length > 12 && (
        <Pagination
          hasNextPage={end < analyses.length}
          hasPrevPage={start > 0}
          length={analyses.length}
        />
      )}
    </main>
  );
}
