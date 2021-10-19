// import { getAllPostsForHome } from "../lib/api";
import { getHomeData } from "../lib/api";
import styles from "../styles/Home.module.scss";
import SanityBlockContent from "@sanity/block-content-to-react";

export default function Index({ data, preview }) {
	// const heroPost = allPosts[0];
	// const morePosts = allPosts.slice(1);
	console.log("data", data);
	return (
		<div className={styles.container}>
			{data &&
				data.map((home, index) => (
					<article key={index}>
						<header>{home.header}</header>
						<div className={styles["homepage"]}>
							<img
								src={home.image.asset.url}
								alt="homepageoimage"
							/>
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
