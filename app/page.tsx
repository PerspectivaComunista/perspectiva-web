import { Better, Analyses, Posts, Campaigns, Join } from "../components/Home";
// import { getPosts } from "../server/actions/instagram";
import { Post } from "../utils/types";

export default async function Home() {
  // const posts = (await getPosts()) as Post[];
  // const postsImages = posts
  //   .filter((e) => e.type === "IMAGE" || e.type === "CAROUSEL_ALBUM")
  //   .slice(0, 8);

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
      <div className="my-6" />
      {/* <Better lastPost={postsImages[0]} /> */}
      <div className="my-6" />
      {/* <Posts posts={postsImages} /> */}
      <div className="my-6" />
      <Analyses />
      <div className="my-6" />
      <Campaigns />
      <div className="my-6" />
      <Join />
      <div className="my-6" />
    </main>
  );
}
