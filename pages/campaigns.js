import React from 'react'
import HeroPost from '../components/hero-post/hero-post'
import { getAllPostsForCampaign } from '../lib/api'
import MoreStories from '../components/more-stories/more-stories'
import styles from "../styles/Blog.module.scss"
import Meta from '../components/meta/meta'


const Campaigns = ({ allPosts, preview }) => {
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)

	console.log(preview)

	return (
		<section className={styles.container}>
			<Meta title={"CAMPAIGNS"}>
				<meta name="description" content="Campaigns" />
			</Meta>
			<div className={styles.pagetitle}>
				<h1>Campaigns</h1>
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

		</section>
	)
}

export default Campaigns

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForCampaign(preview)
	return {
		props: { allPosts, preview },
		revalidate: 1
	}
}