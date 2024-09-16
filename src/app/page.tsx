const { getFirestore } = require("firebase-admin/firestore");
import Better from "../components/Home/Better";
import Articles from "../components/Home/Articles";
import { Article, Author, Post } from "@/utils/types";
import { collection } from "firebase/firestore";
import { firebaseServerApp } from "@/utils/firebase/server";
import Instagram from "@/components/Home/Instagram";
import Tiktok from "@/components/Home/Tiktok";
import Youtube from "@/components/Home/Youtube";
import { Suspense } from "react";

const getArticles = async (): Promise<Article[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("articles").limit(6).get();
  const articles = response.docs.map((doc: any) => doc.data()) as Article[];
  articles.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return articles;
};

const getInstagram = async (): Promise<Post[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("instagram").limit(6).get();
  const instagram = response.docs.map((doc: any) => doc.data()) as Post[];
  instagram.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return instagram;
};

const getTiktok = async (): Promise<Post[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("tiktok").limit(6).get();
  const tiktok = response.docs.map((doc: any) => doc.data()) as Post[];
  tiktok.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return tiktok;
};

const getYoutube = async (): Promise<Post[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("youtube").limit(6).get();
  const youtube = response.docs.map((doc: any) => doc.data()) as Post[];
  youtube.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return youtube;
};

const getAuthor = async (): Promise<Author[]> => {
  const db = getFirestore(firebaseServerApp);
  const response = await db.collection("authors").get();
  const authors = response.docs.map((doc: any) => doc.data()) as Author[];

  return authors;
};

export default async function Home() {
  const articles = await getArticles();
  const instagrams = await getInstagram();
  const authors = await getAuthor();
  const tiktoks = await getTiktok();
  const youtubes = await getYoutube();
  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
      <Suspense fallback={<div>Loading...</div>}>
        <Better lastPost={articles[0]} authors={authors} />
      </Suspense>
      <div className="my-6" />
      <Suspense fallback={<div>Loading...</div>}>
        <Articles articles={articles} authors={authors} />
      </Suspense>
      <div className="my-6" />
      <Suspense fallback={<div>Loading...</div>}>
        <Youtube posts={youtubes} />
      </Suspense>
      <div className="my-6" />
      <Suspense fallback={<div>Loading...</div>}>
        <Tiktok posts={tiktoks} />
      </Suspense>
      <div className="my-6" />
      <Suspense fallback={<div>Loading...</div>}>
        <Instagram posts={instagrams} />
      </Suspense>
      {/* <Library posts={posts} /> */}
      <div className="my-6" />
    </main>
  );
}
