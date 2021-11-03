import React from 'react'
import styles from "../styles/News.module.scss"
import { useMedia } from 'react-use';
import { Timeline } from 'react-twitter-widgets';
import Meta from '../components/meta/meta';

const News = () => {

	const phone = useMedia("(min-width: 600px)");

	return (
		<section className={styles.container}>
			<Meta title={"NEWS"}>
				<meta name="description" content="News" />
			</Meta>

			<div className={styles.pagetitle}>
				<h1>News</h1>
			</div>

			<div className={styles.twittercontainer}>
				<div
					className={styles["twitter-embed"]}
					id={"twitter"}
					tabIndex="0"
				>
					{

						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "w_cwu"
							}}
							options={{
								height: `${phone ? "1000px" : "500px"}`
							}}
						/>

					}
				</div>
				<div className={styles.twitter}>
					<div className={styles.newsheader}>
						<p>
							Keep up to date with all the latest news / campaigns.
							Follow our social media websites for constant updates
							and information straight frm the source
						</p>
					</div>
					<img src={"/twitter.png"} alt="twitter" />
				</div>
			</div>

		</section>
	);
};

export default News
