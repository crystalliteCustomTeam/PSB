import React from "react";
import Link from "next/link";
import { MRContact } from "@/component";
import Head from "next/head";
import styles from "@/styles/featureblog.module.css";
import Image from "next/image";
import BannerBlog from "media/post/bannerBlog.webp";

const data = [
  {
    title: "Lorem Ipsum is simply dummy",
    txt: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    img: BannerBlog.src,
    link: "lorem-ipsum-is-simply-dummy",
    date: "24 Mar, 2025",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    txt: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    img: BannerBlog.src,
    link: "lorem-ipsum-is-simply-dummy",
    date: "24 Mar, 2025",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    txt: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    img: BannerBlog.src,
    link: "lorem-ipsum-is-simply-dummy",
    date: "24 Mar, 2025",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    txt: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    img: BannerBlog.src,
    link: "lorem-ipsum-is-simply-dummy",
    date: "24 Mar, 2025",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    txt: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    img: BannerBlog.src,
    link: "lorem-ipsum-is-simply-dummy",
    date: "24 Mar, 2025",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    txt: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    img: BannerBlog.src,
    link: "lorem-ipsum-is-simply-dummy",
    date: "24 Mar, 2025",
  },
];
function getDaysAgo(dateString) {
  const postDate = new Date(dateString);
  const today = new Date();

  // Calculate difference in milliseconds
  const diffTime = today - postDate;

  // Convert to days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
const Blog = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <section className={styles.blogMainSec}>
          <div className="mr-container">
            <div className="m-auto text-center">
              <div className={styles.bannerBlog}>
                <div className={styles.blogsubtitle}>Our Blogs</div>
                <h1>Our Center Of Learning</h1>
                <p>
                  A place where you can be educated on matters of all things
                  books!
                </p>
                <div className={styles.bannerImg}>
                  <Image src={BannerBlog.src} alt="Banner Blog" fill />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.blogListingSec}>
          <div className="mr-container">
            <div className={styles.blogMainListing}>
              {data.map((item, index) => {
                return (
                  <div className={styles.blogListItem} key={index}>
                    <div className={styles.imgBox}>
                      <Image src={item.img} alt="Banner Blog" fill />
                    </div>
                    <div className={styles.contentBox}>
                      <h4>{item.title}</h4>
                      <div className={styles.blogInfo}>
                        {item.date} .{" "}
                        <span>{getDaysAgo(item.date)} days ago</span>
                      </div>
                      <p>{item.txt}</p>
                      <Link href={item.link}>Read More</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <MRContact />
      </main>
    </>
  );
};

export default Blog;
