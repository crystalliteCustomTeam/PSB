import { BlogArticle, BlogFaqs, BlogNavigation, BlogShare } from '@/component/MRBlogs';
import { useRouter } from 'next/router';
import { getSinglePost, getPostList } from "../api/blogs/route";

export async function getStaticProps({ params }) {
    try {
        const post = await getSinglePost(params.slug);
        return {
            props: {
                post,
            },
        };
    } catch (error) {
        console.error('Error fetching post data:', error);
        return {
            notFound: true,
        };
    }
}

export async function getStaticPaths() {
    try {
        const posts = await getPostList(); // Assuming getPostList fetches all posts
        const paths = posts.map((post) => ({
            params: { slug: post.slug },
        }));
        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error('Error fetching paths:', error);
        return {
            paths: [],
            fallback: false,
        };
    }
}

export default function Slug({ post }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    let featuredImageUrl = "https://inhouse.cryscampus.com/wordpress/bitswits/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";

    return (
        <>
            <section className={styles.innerBannerSec}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className={styles.blogTopDes}>
                                <h4>{post.categories.nodes[0]?.name}</h4>
                                <h1 className='fontsfregular'>{post.title}</h1>
                                {post.blogDescription?.topDescription && (
                                    <div dangerouslySetInnerHTML={{ __html: post.blogDescription.topDescription }}></div>
                                )}
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Image
                                quality={75}
                                src={post.featuredImage ? `https://inhouse.cryscampus.com/wordpress/bitswits/wp-content/uploads/${post.featuredImage.node.mediaDetails.file}` : featuredImageUrl}
                                alt="BitsWits"
                                width={736}
                                height={450}
                                className="img-fluid"
                            />
                        </Col>
                        <Col lg={12}>
                            <Row className={styles.blogdesc}>
                                <Col lg={2} className={styles.clientImage}>
                                    <Image src={Client} alt='Bitswits' className='img-fluid' />
                                </Col>
                                <Col lg={10} className={styles.content}>
                                    <ul className='p-0'>
                                        <li className={styles.name}>
                                            <p className='fontsfregular mb-0'>By <span>{post.author.node.name}</span></p>
                                        </li>
                                        <li className={`${styles.verified} d-flex align-items-center`}>
                                            <p className='fontsfregular mb-0'> Verified Expert In Development
                                                <Image src={verified} alt='Bitswits' width={16} height={16} className='ms-3' />
                                            </p>
                                        </li>
                                        <li className={`${styles.experience} d-flex align-items-center`}>
                                            <Image src={experience} alt='Bitswits' width={16} height={16} className='me-3' />
                                            <p className='fontsfregular mb-0'> 3 Years Of Experience</p>
                                        </li>
                                    </ul>
                                    <div className={styles.desc}>
                                        <p className='fontsfregular'>{post.author.node.description}</p>
                                    </div>
                                    <div className={styles.expertise}>
                                        <span className={`${styles.expertisePara} fontsfregular`}>EXPERTISE</span>
                                        {post.author.node.userexperties.experties.map((experties, index) => (
                                            <span key={index} className={`fontsfregular text-black ${styles.btn}`}>
                                                {experties}
                                            </span>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.articleSec} id="leftcontent">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <BlogShare />
                            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                            <BlogFaqs faqData={post.blogDescription.faq} />
                        </Col>
                        <Col lg={4}>
                            <BlogNavigation postData={post} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <BlogArticle />
        </>
    );
}
