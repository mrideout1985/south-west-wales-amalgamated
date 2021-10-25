import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useMedia } from "react-use";
import styles from "./nav.module.scss"
import Sidebar from "../../components/sidebar/sidebar"

const Nav = () => {
	const isWide = useMedia("(min-width: 600px)");
	const router = useRouter()

	return (
		<>
			{isWide ? (
				<nav className={styles.container} aria-label="swwamal">
					<Link
						href="/"

						role="menuitem"
					>

						<a className={[
							[styles["default"]],
							[router?.pathname === "/" ? styles["active"] : ""],
						].join(" ")}>
							<p>Home</p>
						</a>


					</Link>
					<Link
						href="/about"
						role="menuitem"
					>
						<a className={[
							[styles["default"]],
							[router?.pathname === "/about" ? styles["active"] : ""],
						].join(" ")} >
							<p>About</p>

						</a>


					</Link>
					<Link
						href="/news"
						role="menuitem"
					>

						<a className={[
							[styles["default"]],
							[router?.pathname === "/news" ? styles["active"] : ""],
						].join(" ")}>


							<p>News</p>

						</a>

					</Link>
					<Link
						href="/campaigns"
						role="menuitem"
					>

						<a className={[
							[styles["default"]],
							[router?.pathname === "/campaigns" ? styles["active"] : ""],
						].join(" ")}>

							<p>Campaigns</p>

						</a>


					</Link>
					<Link
						href="/agreements"
						role="menuitem"
					>
						<a className={[
							[styles["default"]],
							[router?.pathname === "/agreements" ? styles["active"] : ""],
						].join(" ")} >

							<p>Agreements</p>

						</a>

					</Link>
					<Link
						href="/blog"
						role="menuitem"
					>

						<a className={[
							[styles["default"]],
							[router?.pathname === "/blog" ? styles["active"] : ""],
						].join(" ")}>

							<p>Blog</p>

						</a>


					</Link>
					<Link
						href="/contact"
						role="menuitem"
					>

						<a className={[
							[styles["default"]],
							[router?.pathname === "/contact" ? styles["active"] : ""],
						].join(" ")}>

							<p>Contact</p>

						</a>


					</Link>
				</nav>
			) : <Sidebar />}
		</>
	)

};

export default Nav