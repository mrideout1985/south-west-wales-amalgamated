import { useEffect, useState } from "react";
import { client } from "../client";

const useAgreement = (props) => {
	const [agreementData, setAgreementData] = useState();

	useEffect(() => {
		client.fetch(`*[_type == 'agreements' && "${props}"  in categories[]._ref]`)
			.then((data) => setAgreementData(data))
			.catch(console.error);
	}, [props]);

	return agreementData
};

export { useAgreement };
