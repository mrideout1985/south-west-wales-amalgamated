import { getHomeData } from "../lib/api";
import Meta from "../components/meta/meta"
import SanityBlockContent from "@sanity/block-content-to-react";
import styles from "../styles/Home.module.scss";

export default function Home({ data }) {


	return (
		<section className={styles.container} >
			<Meta title={"HOME"}>
				<meta name="description" content="Home" />
			</Meta>
			{data && data.map((home, index) => (
				<article key={index}>
					<div className={styles.pagetitle}>
						<h1>Home</h1>
					</div>
					<header>{home.header}</header>
					<div className={styles["homepage"]}>
						<div className={styles.section1}>
							{home.image?.asset?.url !== undefined ? <img
								src={home.image.asset.url}
								alt="homepageoimage"
							/> : null}
							<div className={styles.block1}>
								<SanityBlockContent
									dataset="production"
									projectId="8bvty42v"
									blocks={home?.info}
								/>
							</div>
						</div>
						{!home.moreInfo ? null : <div className={styles.section2}>
							<div className={styles.block2}>
								<SanityBlockContent
									dataset="production"
									projectId="8bvty42v"
									blocks={home?.moreInfo}
								/>
							</div>
						</div>}
					</div>
				</article>
			))
			}
		</section >
	);
}

export async function getStaticProps() {
	const homeData = await getHomeData();
	return {
		props: { data: homeData },
	};
}
