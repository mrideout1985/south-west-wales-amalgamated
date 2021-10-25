import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from "../../lib/sanity"
import styles from "./cover-image.module.scss"

export default function CoverImage({ title, url, imageObject, slug }) {
	const image = (
		<img
			width={1240}
			height={540}
			alt={`Cover Image for ${title}`}
			className={styles.image}
			src={imageBuilder(imageObject).width(1240).height(540).url()}
		/>
	)

	return (
		<div className={styles.container}>
			{slug ? (
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	)
}
