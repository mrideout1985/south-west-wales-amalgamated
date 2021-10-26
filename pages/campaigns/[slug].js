import React from 'react'
import { useRouter } from 'next/router'
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
					<>
						<article>
							{/* <Head>
				  <title>
					{post.title} | Next.js Blog Example with {CMS_NAME}
				  </title>
				  {/* <meta property="og:image" content={post.ogImage.url} /> */}
							{/* </Head> */}
							{/* <PostHeader
				  title={post.title}
				  coverImage={post.coverImage}
				  date={post.date}
				  author={post.author}
				/>
				<PostBody content={post.body} /> */}{post.title}
						</article>

						{/* <Comments comments={post.comments} />
			  <Form _id={post._id} /> */}

						{/* <SectionSeparator /> */}
						{/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
					</>
				)
			}
		</div>
	)
}

export default Campaigns

export async function getStaticProps({ params, preview = false }) {
	const data = await getCampaignsAndMoreCampaigns(params.slug, preview)
	console.log("campaign slug", data)
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
