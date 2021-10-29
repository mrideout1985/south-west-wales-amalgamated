import React from 'react'
import { useRouter } from 'next/router'
import SanityBlockContent from "@sanity/block-content-to-react";
import Avatar from "../../components/avatar/avatar"
import styles from "../../styles/Post.module.scss"
import { getAllCampaignDataWithSlug, getCampaignsAndMoreCampaigns } from '../../lib/api'

const Campaigns = ({ post, morePosts, preview }) => {

	return (
		<div>
			{post && (<article className={styles.container}>
				<div className={styles.title}>
					<h2>{post.title !== undefined ? post.title : "Title"}</h2>
				</div>

				<div className={styles.post}>
					{post.body === undefined ? null : <SanityBlockContent
						dataset="production"
						projectId="8bvty42v"
						blocks={post.body}
					/>}
				</div>
				<div className={styles.avatar}>
					<Avatar name={post.author?.name} picture={post.author?.picture} />
				</div>
			</article>)}
		</div>
	)
}

export default Campaigns

export async function getStaticProps({ params, preview = false }) {
	const data = await getCampaignsAndMoreCampaigns(params.slug, preview)
	return {
		props: {
			preview,
			post: data?.campaigns || null,
			morePosts: data?.morePosts || null,
		},
		revalidate: 1
	}
}

export async function getStaticPaths() {
	const allPosts = await getAllCampaignDataWithSlug()
	return {
		paths:
			allPosts?.map((post) => ({
				params: {
					slug: post.slug,
				},
			})) || [],
		fallback: true,
	}
}
