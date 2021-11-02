import React, { useState, useEffect } from 'react'
import { getAgreementsData } from "../lib/api"
import { useAgreement } from '../hooks/useAgreement'
import styles from "../styles/Agreements.module.scss"
import Meta from "../components/meta/meta"
import { set } from 'date-fns'

const Agreements = ({ data }) => {
	const [agreement, setAgreement] = useState()
	const displayAgreement = useAgreement(agreement)

	// const filterCategories = () => {
	// 	data.map(el => el.categories.map((categories) => newCategories.push(categories._ref)))
	// 	newCategories.filter((value, index) => newCategories.indexOf(value) === index).map(el => filteredCategories.push(el))

	// }


	const filter = () => {
		let cats = []
		return data.map(e => e.categories.map(e => cats.push(e._ref)))
		// let unique = [...new Set(cats)]
		// return unique
	}







	return (
		<div className={styles.agreements}>
			<Meta title={"AGREEMENTS"}>
				<meta name="description" content="Agreements" />
			</Meta>
			<div className={styles["nav-links"]}>
				{filter().map((category) => {
					return (
						<button onClick={() => setAgreement(category)}>1</button>
					)
				})}
			</div>
			<div className={styles["agreements-container"]}>
				{displayAgreement === undefined
					? ""
					: displayAgreement.map((el, key) => {
						return (
							<a
								key={key}
								href={el.url}
								className={styles.policies}
							>
								<p>{el.policyname}</p>
							</a>
						);
					})}
			</div>

		</div>
	)
}

export default Agreements

export async function getStaticProps() {
	const agreementData = await getAgreementsData()
	return {
		props: { data: agreementData }
	}
}
