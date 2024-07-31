"use server";

import { Instagram } from "@/utils/types";

export default async function getInstagramPosts(): Promise<Instagram[] | any> {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`
  );
  const json = await response.json();
  const jsonData = json.data;

  const instagram = await Promise.all(
    jsonData.map(async (item: Record<string, any>) => {
      let instagram = {
        imageUrl: item.media_url,
        createdAt: item.timestamp,
        url: item.permalink,
        id: item.id,
        type: item.media_type,
        description: item.caption,
      } satisfies Instagram;
      return instagram;
    })
  );

  return instagram.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}
