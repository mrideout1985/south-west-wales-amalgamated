import React from "react";
import Image from "next/image";
import dragon from "../../assets/images/dragon.svg";

import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1>South West Wales AMAL</h1>
				<span>
					<Image src={dragon} alt="dragon" width={100} height={100} />
				</span>
			</div>
		</header>
	);
};

export { Header };
