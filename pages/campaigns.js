import React from 'react'
import { getCampaignsData } from '../lib/api'

const Campaigns = ({ data }) => {
	return (
		<div>
			Campaigns
			{console.log(data)}
		</div>
	)
}

export default Campaigns

export async function getStaticProps() {
	const campaignData = await getCampaignsData()
	return {
		props: { data: campaignData }
	}
}
