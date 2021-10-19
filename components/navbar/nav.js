import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import { useMedia } from "react-use";
import { Sidebar } from "../sidebar/sidebar";

const Nav = () => {
	const isWide = useMedia("(min-width: 800px)");

	return (
		<>
			{isWide ? (
				<nav className={styles.container} aria-label="swwamal">
					<Link
						href="/home"
						className={styles.navlink}
						activeClassName={styles.activenavlink}
						role="menuitem"
					>
						<a>
							<p>Home</p>
						</a>
					</Link>
					<Link
						href="/about"
						className={styles.navlink}
						activeClassName={styles.activenavlink}
						role="menuitem"
					>
						<a>
							<p>About</p>
						</a>
					</Link>
					<Link
						href="/news"
						className={styles.navlink}
						activeClassName={styles.activenavlink}
						role="menuitem"
					>
						<a>
							<p>News</p>
						</a>
					</Link>
					<Link
						href="/campaigns"
						className={styles.navlink}
						activeClassName={styles.activenavlink}
						role="menuitem"
					>
						<a>
							<p>Campaigns</p>
						</a>
					</Link>
					<Link
						href="/agreements"
						className={styles.navlink}
						activeClassName={styles.activenavlink}
						role="menuitem"
					>
						<a>
							<p>Agreements</p>
						</a>
					</Link>
					<Link
						href="/blog"
						className={styles.navlink}
						activeClassName={styles.activenavlink}
						role="menuitem"
					>
						<a>
							<p>Blog</p>
						</a>
					</Link>
					<NavLink
						href="/contact"
						className={styles.navlink}
						activeClassName={styles.activenavlink}
						role="menuitem"
					>
						<a>
							<p>Contact</p>
						</a>
					</NavLink>
				</nav>
			) : (
				<Sidebar />
			)}
		</>
	);
};

export { Nav };
