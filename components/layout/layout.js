import React from 'react'
import styles from "../../styles/Layout.module.scss"
import Footer from '../footer/footer'
import Nav from '../nav/nav'


const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<main className={styles.container}>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
