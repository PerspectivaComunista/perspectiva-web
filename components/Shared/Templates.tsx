import { Analysis, Campaign, Member } from "../../utils/types";
import Image from "next/image";
import Link from "next/link";

export function AnalysisTemplate({ analysis }: { analysis: Analysis }) {
  const href = `/analyses/${analysis.slug}`;
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto my-4">
      <div className="sm:hidden block">
        <Link href={href}>
          <Image
            src={analysis.imageUrl}
            alt="Posts"
            className="md:w-1/2 w-full shadow-2xl object-cover"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      <div className="sm:w-2/3 w-full">
        <Link href={href}>
          <h2 className="text-4xl font-black hover:text-gray-500">
            {analysis.title}
          </h2>
        </Link>
        <h4
          className="my-4 text-base"
          dangerouslySetInnerHTML={{ __html: analysis.excerpt }}
        />

        <Link href={href}>
          <h5 className="text-base font-bold hover:text-gray-500">
            Citește mai departe...
          </h5>
        </Link>
      </div>

      <Link
        href={href}
        className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden"
      >
        <Image
          src={analysis.imageUrl}
          alt="Posts"
          width={500}
          height={500}
          priority={true}
          className="shadow-2xl object-contain max-h-72"
        />
      </Link>
    </div>
  );
}

export function CampaignTemplate({ campaign }: { campaign: Campaign }) {
  const href = `/campaigns/${campaign.slug}`;
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto my-4">
      <div className="sm:hidden block">
        <Link href={href}>
          <Image
            src={campaign.imageUrl}
            alt="Posts"
            className="md:w-1/2 w-full shadow-2xl object-contain"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      <div className="sm:w-2/3 w-full">
        <Link href={href}>
          <h2 className="text-4xl font-black hover:text-gray-500">
            {campaign.title}
          </h2>
        </Link>
        <h4
          className="my-4 text-base"
          dangerouslySetInnerHTML={{ __html: campaign.excerpt }}
        />

        <Link href={href}>
          <h5 className="text-base font-bold hover:text-gray-500">
            Citește mai departe...
          </h5>
        </Link>
      </div>

      <Link
        href={href}
        className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden"
      >
        <Image
          src={campaign.imageUrl}
          alt="Posts"
          width={500}
          height={500}
          priority={true}
          className="shadow-2xl object-contain max-h-72"
        />
      </Link>
    </div>
  );
}

export function MemberTemplate({ member }: { member: Member }) {
  return (
    <div className="flex sm:flex-row flex-col items-start gap-4">
      <div className="flex items-center gap-4 sm:w-1/4 w-full">
        <Image
          width={600}
          height={600}
          src={member.imageUrl}
          alt={member.name}
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 sm:w-3/4 w-full">
        <h3 className="text-4xl font-black">{member.name}</h3>
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: member.description }}
        ></p>
      </div>
    </div>
  );
}
