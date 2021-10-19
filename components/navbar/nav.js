import React from "react";
import Link from "next/link";
// import { useMedia } from "react-use";
import styles from "./nav.module.scss"
// import Sidebar from "../sidebar/sidebar";

const Nav = () => {
	// const isWide = useMedia("(min-width: 800px)");

	return (
		<nav className={styles.container} aria-label="swwamal">
			<Link
				href="/"
				className={styles.navlink}
				role="menuitem"
			>

				<p>Home</p>

			</Link>
			<Link
				href="/about"
				className={styles.navlink}
				role="menuitem"
			>

				<p>About</p>

			</Link>
			<Link
				href="/news"
				className={styles.navlink}
				role="menuitem"
			>

				<p>News</p>

			</Link>
			<Link
				href="/campaigns"
				className={styles.navlink}
				role="menuitem"
			>

				<p>Campaigns</p>

			</Link>
			<Link
				href="/agreements"
				className={styles.navlink}
				role="menuitem"
			>

				<p>Agreements</p>

			</Link>
			<Link
				href="/blog"
				className={styles.navlink}
				role="menuitem"
			>

				<p>Blog</p>

			</Link>
			<Link
				href="/contact"
				className={styles.navlink}
				role="menuitem"
			>

				<p>Contact</p>

			</Link>
		</nav>
	);
};

export default Nav