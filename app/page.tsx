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
  const lastPost: Post = {
    url: "/twitter-image.jpg",
    imageUrl: "/twitter-image.jpg",
    description:
      "Aceasta este descrierea ultimei postări. <br /> Este o descriere detaliată cu HTML.",
    createdAt: "2021-09-01T12:00:00Z",
    id: "123",
    type: "IMAGE",
  };

  const analyses = await getAnalyses();
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[1].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[1].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[1].slug}`,
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[0].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[0].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[0].slug}`,
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: `/analyses/${analyses[0].slug}`,
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: `/analyses/${analyses[0].slug}` },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: `/analyses/${analyses[0].slug}`,
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
      <div className="my-6" />
      <Better lastPost={lastPost} />
      <div className="my-6" />
      <Articles posts={posts} />
      <div className="my-6" />
      <Library posts={posts} />
      <div className="my-6" />
    </main>
  );
}
