import React from "react";
import HeroPost from "../components/hero-post/hero-post";
import { getAllPostsForHome } from "../lib/api";
import MoreStories from "../components/more-stories/more-stories";
import Meta from "../components/meta/meta";
import styles from "../styles/News.module.scss";

const News = ({ allPosts, preview }) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <div className={styles.container}>
            <Meta title={"News"}>
                <meta name="description" content="News" />
            </Meta>
            <div className={styles.pagetitle}>
                <h1>News</h1>
            </div>
            <div className={styles["blog-container"]}>
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
        </div>
    );
};

export default News;

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    return {
        props: { allPosts, preview },
        revalidate: 1,
    };
}
