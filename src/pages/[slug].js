import Head from "next/head";
import style from "@/styles/singleblog.module.css";
import { BlogData } from "@/blogsdata/data/data";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = BlogData.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = BlogData.find((post) => post.slug === params.slug);
  return {
    props: {
      blog: blog || null,
    },
  };
}
function getDaysAgo(dateString) {
  const postDate = new Date(dateString);
  const today = new Date();

  // Calculate difference in milliseconds
  const diffTime = today - postDate;

  // Convert to days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
export default function BlogPost({ blog }) {
  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <>
      <Head>
        <title>{blog.tit}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.tit} />
        <meta property="og:description" content={blog.description} />
        <meta
          property="og:url"
          content={`https://www.bestsellingpublisher.com/${blog.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.tit} />
        <meta name="twitter:description" content={blog.description} />
        <meta
          name="twitter:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className={style.singleBlogSec}>
        <div className="mr-container">
          <div className={style.singleBlogBox}>
            <h1>{blog.title}</h1>
            <div className={style.blogInfo}>
              {blog.date} . <span>{getDaysAgo(blog.date)} days ago</span>
            </div>
            <div className={style.singleBlogImg}>
              <Image src={blog.img} alt="Banner Blog" fill />
            </div>
            <div
              className={style.singleBlogContent}
              dangerouslySetInnerHTML={{ __html: blog.maintxt }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
