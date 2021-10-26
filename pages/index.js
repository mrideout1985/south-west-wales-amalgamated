// import { getAllPostsForHome } from "../lib/api";
import { getHomeData } from "../lib/api";
import Meta from "../components/meta/meta"
import SanityBlockContent from "@sanity/block-content-to-react";
import styles from "../styles/Home.module.scss";

export default function Home({ data, preview }) {
	// const heroPost = allPosts[0];
	// const morePosts = allPosts.slice(1);
	return (

		<div className={styles.container}>
			<Meta title={"HOME"}>
				<meta name="description" content="Home" />
			</Meta>
			{data &&
				data.map((home, index) => (
					<article key={index}>
						<header>{home.header}</header>
						<div className={styles["homepage"]}>

							{home.image?.asset?.url !== undefined ? <img
								src={home.image.asset.url}
								alt="homepageoimage"
							/> : null}
							<SanityBlockContent
								dataset="production"
								projectId="8bvty42v"
								blocks={home?.info}
							/>
						</div>
					</article>
				))}
		</div>
	);
}

// export async function getStaticProps({ preview = false }) {
// 	const allPosts = await getAllPostsForHome(preview);
// 	return {
// 		props: { allPosts, preview },
// 		revalidate: 1,
// 	};
// }

export async function getStaticProps() {
	const homeData = await getHomeData();
	return {
		props: { data: homeData },
	};
}
