import React from 'react'
import { getAboutData } from '../lib/api'
import SanityBlockContent from "@sanity/block-content-to-react";
import Meta from '../components/meta/meta'
import styles from "../styles/About.module.scss";

const About = ({ data }) => {
	return (
		<section className={styles.container}>
			<Meta title={"ABOUT"}>
				<meta name="description" content="About" />
			</Meta>
			<div className={styles["about-data"]}>
				{data && data.map((about, index) => (
					<article key={index}>
						<div className={styles.pagetitle}>
							<h1>About</h1>
						</div>
						<div className={styles["aboutpage"]}>
							<div className={styles["blocks"]}>
								<div className={styles["image-block1"]}>
									<div className={styles.image}>
										{about.image?.asset?.url !== undefined ? <img
											src={about.image.asset.url}
											alt="aboutpageoimage"
										/> : null}
									</div>
									<div className={styles.section1}>
										<SanityBlockContent
											dataset="production"
											projectId="8bvty42v"
											blocks={about?.body}
										/>
									</div>
								</div>
								<hr />
								{!about.secondBody ? null :
									<div className={styles.section2}>
										<SanityBlockContent
											dataset="production"
											projectId="8bvty42v"
											blocks={about.secondBody}
										/>
									</div>
								}
							</div>
						</div>
					</article>
				))
				}
			</div>
		</section>

	)
}

export default About

export async function getStaticProps() {
	const aboutData = await getAboutData();
	return {
		props: { data: aboutData },
	};
}