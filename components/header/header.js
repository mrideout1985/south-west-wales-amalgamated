import React from "react";
import Dragon from "../icons/Dragon"
import CwuLogo from "../icons/CwuLogo"
import styles from "./header.module.scss";

const Header = ({ title }) => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<h1>South West Wales AMAL</h1>
				<div className={styles.logos}>
					<CwuLogo size={100} />
					<Dragon size={100} />
				</div>
			</div>
		</div>
	);
};

export default Header
