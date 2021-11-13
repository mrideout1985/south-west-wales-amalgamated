import React, { useState, useEffect, useRef } from 'react'
import { getAgreementsData } from "../lib/api"
import { useAgreement } from '../hooks/useAgreement'
import styles from "../styles/Agreements.module.scss"
import Meta from "../components/meta/meta"

const Agreements = ({ data }) => {
	const [agreement, setAgreement] = useState()
	const [selected, setIsSelected] = useState(0)
	const displayAgreement = useAgreement(agreement)
	const tabRef = useRef([])
	tabRef.current = []

	const addToRefs = (el) => {
		if (el && !tabRef.current.includes(el)) {
			tabRef.current.push(el)
		}
	}

	useEffect(() => {
		let focusableElements = tabRef.current
		let firstTabStop = focusableElements[0];
		let lastTabStop = focusableElements[focusableElements.length - 1];

		if (focusableElements) {
			focusableElements = Array.prototype.slice.call([focusableElements]);
			firstTabStop.focus();

			const handleTabKey = (event) => {
				if (event.key === "Tab") {
					if (event.shiftKey) {
						if (document.activeElement === firstTabStop) {
							event.preventDefault();
							lastTabStop.focus();
						}
					} else {
						if (document.activeElement === lastTabStop) {
							event.preventDefault();
							firstTabStop.focus();
						}
					}
				}
			};

			const handleEscapeKey = (event) => {
				if (event.key === "Escape") {
					document.activeElement.blur()
				}
			};

			document.addEventListener("keydown", handleTabKey);
			document.addEventListener("keydown", handleEscapeKey);
		}
	}, []);

	const filterCategories = () => {
		let policyRefs = []
		data.map(e => e.categories.map(e => policyRefs.push(e._ref)))
		let filteredPolicyRefs = [...new Set(policyRefs)]
		return filteredPolicyRefs
	}

	const handleTab = (category, number) => {
		setAgreement(category)
		setIsSelected(number)
	}
	const handleButtons = () => {
		let names = ["other", "postal", "time-off", "parcel force"]
		return filterCategories().map((category, i) => {
			return (
				<button ref={addToRefs} className={selected === i ? styles.active : styles.links} key={i} onClick={() => handleTab(category, i)}>{names[i]}</button>
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
			<div className={styles.pagetitle}>
				<h1>Agreements</h1>
			</div>
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
