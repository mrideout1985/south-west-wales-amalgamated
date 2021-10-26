import React from 'react'
import { getAgreementsData } from "../lib/api"

const Agreements = ({ data }) => {
	console.log("agreements", data)
	return (

		<div>
			Agreements
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
