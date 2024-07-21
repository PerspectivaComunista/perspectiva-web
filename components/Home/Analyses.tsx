("");
import Link from "next/link";
import { AnalysisTemplate } from "../Shared/Templates";
import { getAnalyses } from "../../server/actions/analyses";

export default async function Analyses() {
  const analyses = await getAnalyses();

  return (
    <div>
      <Link href="/analyses" className="shadow-2xl">
        <h2 className="text-4xl font-black hover:text-gray-500">Analize</h2>
      </Link>

      <AnalysisTemplate analysis={analyses[0]} />

      <Link href="/analyses">
        <h5 className="text-lg underline hover:text-gray-500">
          -&gt; Vezi mai multe analize
        </h5>
      </Link>
    </div>
  );
}
