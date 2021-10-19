import React from 'react'
import styles from "../../styles/Layout.module.scss"


const Layout = ({ children }) => {
	return (
		<>
			<div>NAVBAR</div>
			<main className={styles.container}>
				{children}
			</main>
			<div>Footer</div>
		</>
	)
}

export default Layout
