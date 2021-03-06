import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import { useClickAway } from "react-use";
import ThreeBars from "../../icons/ThreeBars";
import CwuLogo from "../../icons/CwuLogo";
import { menuLinks } from "../../../assets/menulinks";

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
    const hrefs = (link) => {
        if (link === "home") {
            return "/";
        } else {
            return `/${link}`;
        }
    };

    const Links = () =>
        menuLinks.map((link, i) => (
            <Link key={i} href={hrefs(link)} role="menuitem">
                {link}
            </Link>
        ));

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
                <div className={styles.links}>
                    <Links />
                </div>
            </nav>
            <button
                className={styles["sidebar-btn"]}
                onClick={(e) => handleToggle(e)}
                aria-expanded={isSidebarOpen}
            >
                <ThreeBars />
            </button>
        </header>
    );
};

export default MobileNav;
