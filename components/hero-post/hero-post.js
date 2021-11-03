import React from 'react'
import Avatar from '../avatar/avatar'
import CoverImage from '../cover-image/cover-image'
import { imageBuilder } from "../../lib/sanity"
import Link from "next/link"
import Date from '../date/date'
import styles from "./hero-post.module.scss"
import { useRouter } from 'next/router'


const HeroPost = ({ title, coverImage, date, excerpt, author, slug }) => {
	const path = useRouter()
	const image = (
		<img alt={`Cover Image for ${title}`}
			src={imageBuilder(coverImage).url()}
		/>
	)
	return (
		<section className={styles.container}>
			<div className={styles.coverimage}>
				<CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
			</div>
			<div className={styles.postinfo}>
				<div className={styles.title_date}>
					<h3 className={styles.h3}>
						<Link href={path.asPath === `/blog` ? `/posts/${slug}` : `/campaigns/${slug}`}>
							<a>{title}</a>
						</Link>
					</h3>
					<div className={styles.date}>
						<Date dateString={date} />
					</div>
				</div>
				<div className={styles.excerpt_author}>
					<p className={styles.text}>{excerpt}</p>
				</div>
			</div>
		</section >
	)
}

export default HeroPost
