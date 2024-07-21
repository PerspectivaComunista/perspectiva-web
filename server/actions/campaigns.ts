"use server";

import { Campaign } from "../../utils/types";

// categories=3 pentru campanii, categories=2 pentru analize

export async function getCampaigns(): Promise<Campaign[]> {
  const response = await fetch(
    process.env.API_URL + "/posts?categories=3&_embedded"
  );
  const json = await response.json();

  const campaigns = await Promise.all(
    json.map(async (item: Record<string, any>) => {
      const authorId = item.author as number;
      const mediaId = item.featured_media as number;

      const authorResponse = await fetch(
        process.env.API_URL + "/users/" + authorId
      );
      const authorJson = await authorResponse.json();

      const mediaResponse = await fetch(
        process.env.API_URL + "/media/" + mediaId
      );
      const mediaJson = await mediaResponse.json();

      let campaign = {
        createdAt: item.date as string,
        slug: item.slug as string,
        title: item.title.rendered as string,
        text: item.content.rendered as string,
        excerpt: item.excerpt.rendered as string,
        likes: item.acf.aprecieri as number,
        author: authorJson.name as string,
        imageUrl: mediaJson.guid.rendered as string,
      } satisfies Campaign;
      return campaign;
    })
  );

  return campaigns.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export async function getCampaign(slug: string): Promise<Campaign | null> {
  const response = await fetch(process.env.API_URL + "/posts?slug=" + slug, {
    cache: "no-store",
  });
  const json = await response.json();

  if (!json.length) return null;

  const item = json[0];

  const authorId = item.author as number;
  const mediaId = item.featured_media as number;

  const authorResponse = await fetch(
    process.env.API_URL + "/users/" + authorId
  );
  const authorJson = await authorResponse.json();

  const mediaResponse = await fetch(process.env.API_URL + "/media/" + mediaId, {
    cache: "no-store",
  });
  const mediaJson = await mediaResponse.json();

  let campaign = {
    createdAt: item.date as string,
    slug: item.slug as string,
    title: item.title.rendered as string,
    text: item.content.rendered as string,
    excerpt: item.excerpt.rendered as string,
    likes: item.acf.aprecieri as number,
    author: authorJson.name as string,
    imageUrl: mediaJson.guid.rendered as string,
  } satisfies Campaign;

  return campaign;
}
