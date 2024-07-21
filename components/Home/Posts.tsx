"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Post } from "../../utils/types";
import Vezi from "../../assets/images/vezi.png";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="w-full">
      <Link href="/posts">
        <h2 className="text-4xl font-black hover:text-gray-500">Postări</h2>
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
            <SwiperSlide key={post.createdAt} className="overflow-hidden">
              <Link
                href={post.url}
                target="_blank"
                className="shadow-xl relative group"
              >
                <Image
                  src={post.imageUrl}
                  width={300}
                  height={300}
                  className="sm:w-[300px] w-full object-contain"
                  alt={"posts"}
                  priority
                />
                <div className="absolute bg-gray-700 bg-opacity-0 bottom-0 w-full h-3/4 p-4 pt-2 transition-all duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-85 box-border">
                  {post.description && (
                    <p
                      className="text-white text-xs whitespace-break-spaces h-full overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    />
                  )}
                </div>
                <p className="text-white bg-red text-lg absolute bottom-0 py-1 pl-4 w-full transition-all duration-1000 ease-in-out transform -translate-x-full group-hover:translate-x-0">
                  Vezi postarea &gt;&gt;&gt;
                </p>
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
          -&gt; Vezi mai multe postări
        </h5>
      </Link>
    </div>
  );
}
