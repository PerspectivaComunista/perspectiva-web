"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Vezi from "../../assets/images/vezi.png";
import { Article, Author } from "@/utils/types";

export default function Articles({
  articles,
  authors,
}: {
  articles: Article[];
  authors: Author[];
}) {
  return (
    <div className="w-full">
      <Link href="/posts">
        <h2 className="text-4xl font-black hover:text-gray-500">Articole</h2>
      </Link>

      <div className="my-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          // loop={true}
          speed={5000}
          autoplay
          pagination={{ clickable: true }}
        >
          {articles.map((article: Article) => (
            <SwiperSlide key={article.id} className="overflow-hidden ">
              <article className="flex flex-col items-start justify-between">
                <Link
                  href={"/articles/" + article.slug}
                  className="relative w-full"
                >
                  <img
                    src={article.coverUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </Link>
                <div className="max-w-xl">
                  <div className="mt-2 flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={article.createdAt}
                      className="text-gray-500 text-base"
                    >
                      {article.createdAt}
                    </time>
                    <Link
                      href={"/category/" + article.category}
                      className=" relative z-10 rounded-full bg-red-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-red-300"
                    >
                      {article.category}
                    </Link>
                  </div>
                  <Link
                    href={"/articles/" + article.slug}
                    className="group relative"
                  >
                    <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {article.title}
                    </h3>
                    <p
                      className="line-clamp-3 text-sm mb-1 leading-5 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: article.text.slice(0, 150) + "...",
                      }}
                    ></p>
                  </Link>
                  <Link
                    href={"/articles/" + article.slug}
                    className="text-gray-600 text-sm"
                  >
                    <p className="text-gray-600 font-bold">
                      de{" "}
                      {authors.find((e) => e.id === article.author)?.shortName}
                    </p>
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
          {articles.map((article: Article) => (
            <SwiperSlide>
              <Link href={"/articles/" + article.slug} className="shadow-xl">
                <Image
                  src={Vezi}
                  alt="posts"
                  width={300}
                  height={300}
                  className="sm:w-[300px] w-full object-contain"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="/articles">
        <h5 className="text-lg underline hover:text-gray-500">
          -&gt; Vezi mai multe articole
        </h5>
      </Link>
    </div>
  );
}
