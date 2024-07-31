"use server";

import { Instagram } from "@/utils/types";

export default async function getInstagramPosts(): Promise<Instagram[] | any> {
  try {
    const accessToken = process.env.INSTAGRAM_KEY;
    if (!accessToken) {
      throw new Error("Missing Instagram access token");
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${accessToken}`;
    console.log("Fetching Instagram posts from URL:", url);

    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, response: ${errorText}`
      );
    }

    const json = await response.json();
    const jsonData = json.data;

    if (!jsonData) {
      throw new Error("API response does not contain 'data' property");
    }

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
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return [];
  }
}
