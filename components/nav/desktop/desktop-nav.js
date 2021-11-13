import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { menuLinks } from "../../../assets/menulinks";
import Link from "next/link";
import styles from "./nav.module.scss"
import SvgCwuLogo from "../../icons/CwuLogo";

const DesktopNav = () => {

	const router = useRouter()
	// const navRef = useRef([])
	// navRef.current = []
	// const addToRefs = (el) => {
	// 	if (el && !navRef.current.includes(el)) {
	// 		navRef.current.push(el)
	// 	}

	// }
	// useEffect(() => {
	// 	let focusableElements = navRef.current
	// 	let firstTabStop = focusableElements[0];
	// 	let lastTabStop = focusableElements[focusableElements.length - 1];

	// 	if (focusableElements) {
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
	// 				document.activeElement.blur()
	// 			}
	// 		};

	// 		document.addEventListener("keydown", handleTabKey);
	// 		document.addEventListener("keydown", handleEscapeKey);
	// 	}
	// }, []);

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
		<header id="header" className={styles.container} aria-label="swwamal">
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<SvgCwuLogo size={100} />
				</div>
				<div className={styles.links}>
					<Links />
				</div>
			</nav>

		</header>
	)
}

export default DesktopNav
