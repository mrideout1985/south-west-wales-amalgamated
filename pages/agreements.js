import React, { useState, useEffect } from 'react'
import { getAgreementsData } from "../lib/api"
import { useAgreement } from '../hooks/useAgreement'
import styles from "../styles/Agreements.module.scss"
import Meta from "../components/meta/meta"

const Agreements = ({ data }) => {
	const [agreement, setAgreement] = useState()
	const displayAgreement = useAgreement(agreement)


	const filterCategories = () => {
		let policyRefs = []
		data.map(e => e.categories.map(e => policyRefs.push(e._ref)))
		let filteredPolicyRefs = [...new Set(policyRefs)]
		return filteredPolicyRefs
	}

	const handleButtons = () => {
		let names = ["other", "postal", "time-off", "parcel force"]
		return filterCategories().map((category, i) => {
			return (
				<button key={i} onClick={() => setAgreement(category)}>{names[i]}</button>
			)
		})
	}

	useEffect(() => {
		if (data && data[0].categories[0]) {
			setAgreement(data[0].categories[0]._ref)
		}
	}, [data])

	return (
		<div className={styles.agreements}>
			<Meta title={"AGREEMENTS"}>
				<meta name="description" content="Agreements" />
			</Meta>
			<div className={styles["nav-links"]}>
				{handleButtons()}
			</div>
			<div className={styles["agreements-container"]}>
				{displayAgreement &&
					displayAgreement.map((el, key) => {
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
