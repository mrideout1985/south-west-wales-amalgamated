import React from 'react'
import styles from "../../styles/Layout.module.scss"
import Header from '../header/header'
import Nav from "../navbar/nav"


const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.container}>
				{children}
			</main>
			<div>Footer</div>
		</>
	)
}

export default Layout
