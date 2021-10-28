import PostPreview from "../post-preview/post-preview"
import styles from "./more-stories.module.scss"

export default function MoreStories({ posts }) {
  return (
    <section className={styles.container}>
      <h2>
        More Stories
      </h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date === undefined ? Date.now() : post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
