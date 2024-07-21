"use server";

import { Member } from "../../utils/types";

// categories=3 pentru campanii, categories=2 pentru analize

export default async function getMembers(): Promise<Member[]> {
  const response = await fetch(process.env.API_URL + "/members", {
    cache: "no-store",
  });
  const json = await response.json();

  const members = await Promise.all(
    json.map(async (item: Record<string, any>) => {
      const mediaId = item.featured_media as number;

      const mediaResponse = await fetch(
        process.env.API_URL + "/media/" + mediaId
      );
      const mediaJson = await mediaResponse.json();

      let member = {
        createdAt: item.date as string,
        description: item.content.rendered as string,
        imageUrl: mediaJson.guid.rendered as string,
        name: item.title.rendered as string,
      } satisfies Member;
      return member;
    })
  );

  return members.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}
