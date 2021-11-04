import React from "react";
import styles from "./footer.module.scss";
import Mail from "../icons/Mail"
import Phone from "../icons/Phone"
import Location from "../icons/LocationMarker"

function Footer() {
	return (
		<footer className={styles["footer"]}>

			<a
				href="https://www.google.com/maps/place/Communication+Workers+Union,+18+Neath+Rd,+Briton+Ferry,+Neath+SA11+2YR/@51.6309333,-3.8213748,17z/data=!3m1!4b1!4m5!3m4!1s0x486e5e07eb93bbdf:0x64a4294fbb04be70!8m2!3d51.6309333!4d-3.8191861"
				className={styles["address"]}
				tabIndex="0"
				aria-label="address"
			>
				<Location size={50} color="#DF5F9C" />
			</a>
			<a
				className={styles["email"]}
				tabIndex="0"
				aria-label="e-mail link"
				href="mailto:swwamal@gmail.com"
			>
				<Mail size={50} color="#DF5F9C" />
			</a>
			<a href="tel:+447728333530">
				<Phone size={50} color="#DF5F9C" />
			</a>
		</footer>
	);
}

export default Footer
