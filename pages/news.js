import React from 'react'
import styles from "../styles/News.module.scss"
import { useMedia } from 'react-use';
import { Timeline } from 'react-twitter-widgets';

const News = () => {

	const phone = useMedia("(min-width: 600px)");

	return (
		<section className={styles.container}>
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
		</section>
	);
};

export default News
