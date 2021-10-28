import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { menuLinks } from "../../../assets/menulinks";
import Link from "next/link";
import styles from "./nav.module.scss"

const DesktopNav = () => {
	const router = useRouter()

	// useEffect(() => {
	// 	let focusableElements = document.querySelectorAll("a[href]");
	// 	let firstTabStop = focusableElements[0];
	// 	let lastTabStop = focusableElements[focusableElements.length - 1];

	// 	console.log(firstTabStop);

	// 	if (isSidebarOpen) {
	// 		focusableElements = Array.prototype.slice.call([focusableElements]);
	// 		firstTabStop.focus();

	// 		const handleTabKey = (event) => {
	// 			if (event.key === "Tab") {
	// 				if (event.shiftKey) {
	// 					if (document.activeElement === firstTabStop) {
	// 						event.preventDefault();
	// 						lastTabStop.focus();
	// 					}
	// 				} else {
	// 					if (document.activeElement === lastTabStop) {
	// 						event.preventDefault();
	// 						firstTabStop.focus();
	// 					}
	// 				}
	// 			}
	// 		};

	// 		const handleEscapeKey = (event) => {
	// 			if (event.key === "Escape") {
	// 				setIsSidebarOpen(!isSidebarOpen);
	// 			}
	// 		};

	// 		document.addEventListener("keydown", handleTabKey);
	// 		document.addEventListener("keydown", handleEscapeKey);
	// 	}
	// }, [isSidebarOpen]);

	const classNames = (link) => {
		let className = [[styles["default"]]]
		if (link === "home" && router.pathname === "/") className.push([styles["active"]])
		if (router.pathname === `/${link}`) className.push([styles["active"]])

		return className.join(" ")
	}

	const hrefs = (link) => {
		if (link === "home") {
			return "/"
		} else {
			return `/${link}`
		}
	}

	const Links = () => menuLinks.map((link, i) => (
		<Link
			key={i}
			href={hrefs(link)}
			role="menuitem"
		>
			<a className={classNames(link)}>
				<p>{link === "/" ? "home" : link}</p>
			</a>
		</Link>
	))

	return (
		<nav className={styles.container} aria-label="swwamal">
			<Links />
		</nav>
	)
}

export default DesktopNav
