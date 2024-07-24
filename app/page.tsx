import { getAnalyses } from "@/server/actions/analyses";
import Better from "../components/Home/Better";
import Articles from "../components/Home/Articles";
// import { getPosts } from "../server/actions/instagram";
import { Post } from "../utils/types";
import Library from "@/components/Home/Library";

export default async function Home() {
  // const posts = (await getPosts()) as Post[];
  // const postsImages = posts
  //   .filter((e) => e.type === "IMAGE" || e.type === "CAROUSEL_ALBUM")
  //   .slice(0, 8);

  const analyses = await getAnalyses();
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/twitter-image.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl: "/twitter-image.jpg",
      },
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/twitter-image.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl: "/twitter-image.jpg",
      },
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/twitter-image.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl: "/twitter-image.jpg",
      },
    },
    {
      id: 4,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/twitter-image.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl: "/twitter-image.jpg",
      },
    },
    {
      id: 5,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[0].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/twitter-image.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[0].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[0].slug}`,
        imageUrl: "/twitter-image.jpg",
      },
    },
    {
      id: 6,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[0].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/twitter-image.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[0].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[0].slug}`,
        imageUrl: "/twitter-image.jpg",
      },
    },
  ];

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
      <div className="my-6" />
      <Better lastPost={posts[1]} />
      <div className="my-6" />
      <Articles posts={posts} />
      <div className="my-6" />
      {/* <Library posts={posts} /> */}
      <div className="my-6" />
    </main>
  );
}
