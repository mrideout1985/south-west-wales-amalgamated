import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import styles from "./rep-card.module.scss";

const RepCard = (props) => {
	const builder = imageUrlBuilder(sanityClient);
	// eslint-disable-next-line no-unused-vars
	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<div className={styles.card}>
			<div className={styles.cardinterior}>
				<div className={styles.top}>
					<img
						src={props.image}
						alt={props.image}
					/>
				</div>

				<div className={styles.bottom}>
					<span>
						<h2>{props.name}</h2>
						<h4>{props.bio}</h4>
					</span>
					{props.email === null ? null : <a href={`mailto:${props.email}`}>Contact</a>}
				</div>
			</div>
		</div>
	);
};

export default RepCard
