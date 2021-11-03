import React from 'react'
import HeroPost from '../components/hero-post/hero-post'
import { getAllPostsForHome } from '../lib/api'
import MoreStories from '../components/more-stories/more-stories'
import Meta from '../components/meta/meta'
import styles from "../styles/Blog.module.scss"


const Blog = ({ allPosts, preview }) => {
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)

	return (
		<div className={styles.container}>
			<Meta title={"BLOG"}>
				<meta name="description" content="Blog" />
			</Meta>
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
	)
}

export default Blog

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview)
	return {
		props: { allPosts, preview },
		revalidate: 1
	}
}