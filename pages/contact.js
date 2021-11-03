import React from 'react'
import { getRepData } from '../lib/api'
import RepCard from '../components/rep-card/rep-card'
import styles from "../styles/Contact.module.scss"
import Meta from '../components/meta/meta'

const Contact = ({ repData }) => {


	return (
		<section className={styles.container}>
			<Meta title={"CONTACT"}>
				<meta name="description" content="Contact" />
			</Meta>
			<div className={styles.pagetitle}>
				<h1>Contact A Rep</h1>
			</div>
			<div className={styles.cards}>
				{repData &&
					repData.map((info, key) => (
						<RepCard
							name={info.name}
							bio={info.bio}
							image={info.mainImage.asset.url ? info.mainImage.asset.url : null}
							key={key}
							email={info.email}
						/>
					))}
			</div>
		</section>
	)
}
export default Contact

export async function getStaticProps() {
	const data = await getRepData()
	return {
		props: {
			repData: data
		}
	}
}
