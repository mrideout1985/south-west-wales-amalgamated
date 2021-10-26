import { useEffect, useState } from "react";
import sanityClient from "../client";

const useAgreement = (props) => {
	const [agreementData, setAgreementData] = useState();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'agreements' && "${props}" in categories[]._ref]

				
		`
			)
			.then((data) => setAgreementData(data))
			.catch(console.error);
	}, [props]);
	return agreementData;
};

export { useAgreement };
