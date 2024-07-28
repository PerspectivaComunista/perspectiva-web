const { getFirestore } = require("firebase-admin/firestore");
import Better from "../components/Home/Better";
import Articles from "../components/Home/Articles";
import { Article, Author } from "@/utils/types";
import { collection } from "firebase/firestore";
import { firebaseServerApp } from "@/utils/firebase/server";

const getArticles = async (): Promise<Article[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("articles").limit(6).get();
  const articles = response.docs.map((doc: any) => doc.data()) as Article[];
  articles.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return articles;
};

const getAuthor = async (): Promise<Author[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("authors").get();
  const authors = response.docs.map((doc: any) => doc.data()) as Author[];

  return authors;
};

export default async function Home() {
  const articles = await getArticles();
  const authors = await getAuthor();
  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
      <div className="my-6" />
      <Better lastPost={articles[0]} authors={authors} />
      <div className="my-6" />
      <Articles articles={articles} authors={authors} />
      <div className="my-6" />
      {/* <Library posts={posts} /> */}
      <div className="my-6" />
    </main>
  );
}
