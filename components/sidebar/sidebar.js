import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import { useClickAway } from "react-use";
import bars from "./three-bars.svg";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const sidebarRef = useRef();

	useClickAway(sidebarRef, () => {
		setIsSidebarOpen(false);
	});

	const handleToggle = (e) => {
		e.preventDefault();
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		let focusableElements = document.querySelectorAll("a[href]");
		let firstTabStop = focusableElements[0];
		let lastTabStop = focusableElements[focusableElements.length - 1];

		console.log(firstTabStop);

		if (isSidebarOpen) {
			focusableElements = Array.prototype.slice.call([focusableElements]);
			firstTabStop.focus();

			const handleTabKey = (event) => {
				if (event.key === "Tab") {
					if (event.shiftKey) {
						if (document.activeElement === firstTabStop) {
							event.preventDefault();
							lastTabStop.focus();
						}
					} else {
						if (document.activeElement === lastTabStop) {
							event.preventDefault();
							firstTabStop.focus();
						}
					}
				}
			};

			const handleEscapeKey = (event) => {
				if (event.key === "Escape") {
					setIsSidebarOpen(!isSidebarOpen);
				}
			};

			document.addEventListener("keydown", handleTabKey);
			document.addEventListener("keydown", handleEscapeKey);
		}
	}, [isSidebarOpen]);

	return (
		<>
			<div
				className={[
					[styles["sidebar-component"]],
					[isSidebarOpen ? styles["sidebar-component-open"] : ""],
				].join(" ")}
				ref={sidebarRef}
				aria-label="sidebar"
			>
				<div className={styles["heading"]}>
					<h1>
						<NavLink to="/">SWWAMAL</NavLink>
					</h1>
				</div>
				<div className={styles["nav-container"]}>
					<nav className={styles["nav"]}>
						<ul>
							<li>
								<Link href="/home">Home</Link>
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
				</div>
			</div>
			<button
				className={styles["sidebar-btn"]}
				onClick={(e) => handleToggle(e)}
				aria-expanded={isSidebarOpen}
			>
				<img src={bars} alt="bars" />
			</button>
		</>
	);
};

export { Sidebar };
