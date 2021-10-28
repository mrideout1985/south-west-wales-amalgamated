import React from 'react'
import { useRouter } from 'next/router'
import SanityBlockContent from "@sanity/block-content-to-react";
import Avatar from "../../components/avatar/avatar"
import styles from "../../styles/Post.module.scss"
import ErrorPage from 'next/error'
import { getAllCampaignDataWithSlug, getCampaignsAndMoreCampaigns } from '../../lib/api'

const Campaigns = ({ post, morePosts, preview }) => {

	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return (
		<div>
			{
				router.isFallback ? (
					<div>Loading…</div>
				) : (

					<article className={styles.container}>
						<div className={styles.title}>
							<h2>{post.title}</h2>
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
					</article>


				)
			}
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
	console.log("allPosts", allPosts)
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
