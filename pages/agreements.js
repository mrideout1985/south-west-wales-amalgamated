import React, { useState } from 'react'
import { getAgreementsData } from "../lib/api"
import { useAgreement } from '../hooks/useAgreement'
import Meta from "../components/meta/meta"

const Agreements = ({ data }) => {
	const [agreement, setAgreement] = useState()
	const displayAgreement = useAgreement(agreement)

	let newCategories = []
	// empty categories array
	let filteredCategories = []
	// filtered categories array
	const filterCategories = () => {
		data.map(el => el.categories.map((categories) => newCategories.push(categories._ref)))
		newCategories.filter((value, index) => newCategories.indexOf(value) === index).map(el => filteredCategories.push(el))

	}
	//function maps data and the categories and then filters out duplicate category _refs. 
	filterCategories()
	//runs the function

	return (

		<div>
			<Meta title={"AGREEMENTS"}>
				<meta name="description" content="Agreements" />
			</Meta>
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
