import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import { useClickAway } from "react-use";
import ThreeBars from "../../icons/ThreeBars"
import CwuLogo from "../../icons/CwuLogo"

const MobileNav = () => {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const sidebarRef = useRef();

	useClickAway(sidebarRef, () => {
		setIsSidebarOpen(false);
	});

	const handleToggle = (e) => {
		e.preventDefault();
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<header>
			<nav
				className={[
					[styles["sidebar-component"]],
					[isSidebarOpen ? styles["sidebar-component-open"] : ""],
				].join(" ")}
				ref={sidebarRef}
				aria-label="sidebar"
			>
				<div className={styles.logo}>
					<CwuLogo size={100} />
				</div>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/news">News</Link>
					</li>
					<li>
						<Link href="/campaigns">Campaigns</Link>
					</li>
					<li>
						<Link href="/agreements">Agreements</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<button
				className={styles["sidebar-btn"]}
				onClick={(e) => handleToggle(e)}
				aria-expanded={isSidebarOpen}>
				<ThreeBars />
			</button>
		</header>
	);
};

export default MobileNav