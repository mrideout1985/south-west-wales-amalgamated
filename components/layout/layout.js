import React from 'react'
import styles from "../../styles/Layout.module.scss"
import Header from '../header/header'
import Nav from "../navbar/nav"


const Layout = ({ children }) => {
	return (
		<>
			<main className={styles.container}>
				<Header />
				{children}
			</main>
			<div>Footer</div>
		</>
	)
}

export default Layout
