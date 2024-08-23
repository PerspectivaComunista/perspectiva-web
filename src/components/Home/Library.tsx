"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Vezi from "../../assets/images/vezi.png";

export default function Library({ posts }: { posts: any[] }) {
  return (
    <div className="w-full">
      <Link href="/posts">
        <h2 className="text-4xl font-black hover:text-gray-500">Bibliotecă</h2>
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
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          // loop={true}
          speed={700}
          autoplay
          pagination={{ clickable: true }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="overflow-hidden">
              <Link href={post.href}>
                <article className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-2 flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      {/* <Link
                        href={post.category.href}
                        className=" relative z-10 rounded-full bg-red-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-red-300"
                      >
                        {post.category.title}
                      </Link> */}
                    </div>
                    <div className="group relative">
                      <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {post.title}
                      </h3>
                      <p className=" line-clamp-3 text-sm mb-1 leading-5 text-gray-600">
                        {post.description}
                      </p>
                    </div>

                    <p className="text-gray-600">de {post.author.role}</p>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Link href="/posts" className="shadow-xl">
              <Image
                src={Vezi}
                alt="posts"
                width={300}
                height={300}
                className="sm:w-[300px] w-full object-contain"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <Link href="/posts">
        <h5 className="text-lg underline hover:text-gray-500">
          -&gt; Vezi mai multe articole
        </h5>
      </Link>
    </div>
  );
}
