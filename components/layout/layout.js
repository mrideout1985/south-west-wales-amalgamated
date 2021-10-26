import React from 'react'
import styles from "../../styles/Layout.module.scss"
import Footer from '../footer/footer'
import Header from '../header/header'
import Nav from '../nav/nav'


const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Nav />
			<main className={styles.container}>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
