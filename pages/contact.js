import React from 'react'
import { getRepData } from '../lib/api'
import RepCard from '../components/rep-card/rep-card'
import styles from "../styles/Contact.module.scss"

const Contact = ({ repData }) => {

	console.log(repData)

	return (
		<section className={styles.container}>
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
