import React from 'react'
import { getAboutData } from '../lib/api'
import Image from "next/image"
import SanityBlockContent from "@sanity/block-content-to-react";
import Meta from '../components/meta/meta'
import styles from "../styles/About.module.scss";
import imageUrlBuilder from "@sanity/image-url";



const About = ({ data }) => {
	return (
		<>
			{data &&
				data.map((about, index) => (
					<section key={index} className={styles.container}>
						<Meta title={"ABOUT"}>
							<meta name="description" content="About" />
						</Meta>
						<div className={styles.data}>
							<div className={styles.image}>
								<Image
									tabIndex="0"
									src={`${about?.image.asset.url}`}
									height={1000}
									width={1500}
									alt="headquarters of south west wales amalgamated"
								/>
								<div className={styles.block} tabIndex="0">
									<SanityBlockContent
										dataset="production"
										projectId="8bvty42v"
										blocks={about.body}
									/>
								</div>
							</div>
							<div className={styles.block} tabIndex="0">
								<SanityBlockContent
									dataset="production"
									projectId="8bvty42v"
									blocks={about.secondBody}
								/>
							</div>

						</div>
					</section>
				))}
		</>

	)
}

export default About

export async function getStaticProps() {
	const aboutData = await getAboutData();
	return {
		props: { data: aboutData },
	};
}