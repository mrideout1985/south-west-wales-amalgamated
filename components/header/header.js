import React from "react";
import Dragon from "../icons/Dragon"
import CwuLogo from "../icons/CwuLogo"
import styles from "./header.module.scss";
import Nav from "../navbar/nav";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1>South West Wales AMAL</h1>
				<div className={styles.logos}>
					<CwuLogo size={100} />
					<Dragon size={100} />
				</div>
			</div>
			<Nav />
		</header>
	);
};

export default Header
