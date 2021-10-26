import React from 'react'
import styles from "../../styles/Layout.module.scss"
import Footer from '../footer/footer'
import Header from '../header/header'


const Layout = ({ children }) => {
	return (
		<>
			<main className={styles.container}>
				<Header />
				{children}
				<Footer />
			</main>

		</>
	)
}

export default Layout
