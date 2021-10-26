import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import SanityBlockContent from "@sanity/block-content-to-react";
import Avatar from "../../components/avatar/avatar"
import Meta from '../../components/meta/meta'
import styles from "../../styles/Post.module.scss"
import CoverImage from '../../components/cover-image/cover-image';




export default function Post({ post, morePosts, preview }) {

  console.log("singlePost", post)

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
              <SanityBlockContent
                dataset="production"
                projectId="8bvty42v"
                blocks={post.body}
              />
            </div>
            <div className={styles.avatar}>
              <Avatar name={post.author.name} picture={post.author.picture} />
            </div>
          </article>


        )
      }
    </div>
  )


}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  console.log("blog slug", data.body)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
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
