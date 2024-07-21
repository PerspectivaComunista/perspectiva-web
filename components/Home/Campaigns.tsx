import Link from "next/link";
import { CampaignTemplate } from "../Shared/Templates";
import { getCampaigns } from "../../server/actions/campaigns";

export default async function Campaigns() {
  const campaigns = await getCampaigns();

  return (
    <div>
      <Link href="/campaigns">
        <h2 className="text-4xl font-black hover:text-gray-500">Campanii</h2>
      </Link>

      <CampaignTemplate campaign={campaigns[0]} />

      <Link href="/campaigns">
        <h5 className="text-lg underline hover:text-gray-500">
          -&gt; Vezi mai multe campanii
        </h5>
      </Link>
    </div>
  );
}
