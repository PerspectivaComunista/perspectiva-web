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
        <h2 className="text-4xl font-black hover:text-gray-500">Instagram</h2>
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
                  className="sm:w-[300px] w-full object-contain border-4 border-[#d6001d]"
                  alt={"posts"}
                  priority
                />

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
    </div>
  );
}
