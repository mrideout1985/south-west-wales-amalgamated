import React, { useState, useEffect } from "react";
import DesktopNav from "./desktop/desktop-nav"
import MobileNav from "./mobile/mobile-nav"
import { useMedia } from "react-use";


const Nav = () => {
	const [isMobile, setIsMobile] = useState(true)
	const isWide = useMedia("(min-width: 600px)");

	useEffect(() => {
		if (isWide) setIsMobile(false)

		return () => {
			setIsMobile(true)
		}
	}, [isWide])

	return (
		<>
			{isMobile ? <MobileNav /> : <DesktopNav />}
		</>
	)

};

export default Nav