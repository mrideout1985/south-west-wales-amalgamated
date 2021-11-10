import React, { useState, useRef } from 'react'
import { getRepData } from '../lib/api'
import { useDebounce, useClickAway } from "react-use";
import RepCard from '../components/rep-card/rep-card'
import styles from "../styles/Contact.module.scss"
import Meta from '../components/meta/meta'

const Contact = ({ repData }) => {
	const [query, setQuery] = useState("");
	const [value, setValue] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const listRef = useRef(null);

	console.log(repData)


	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value)
	}
	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	setQuery(value)
	// 	setValue("")
	// }

	const [] = useDebounce(
		() => {
			setQuery(value)
		},
		200,
		[value]
	);

	useClickAway(listRef, () => {
		setIsOpen(false);
	});

	const handleResults = (data) => {
		return data && data.filter((res) => {
			if (query === "") {
				return res
			} else if (res.name.toLowerCase().includes(query.toLowerCase())) {
				return res
			}
		}).map((res, i) => {
			console.log(res)
			return (
				<li key={i}>
					<RepCard name={res.name} image={res.mainImage.asset.url} bio={res.bio} email={res.email} />
				</li>
			)
		})
	}




	return (
		<section className={styles.container}>
			<Meta title={"CONTACT"}>
				<meta name="description" content="Contact" />
			</Meta>
			<div className={styles.pagetitle}>
				<h1>Contact A Rep</h1>
				<form>
					<label htmlFor="search" />
					<input id="search" placeholder="Rep Name....." type="search" value={value} onChange={handleChange} />
				</form>
			</div>
			<div className={styles.cards}>

				<ul>
					{handleResults(repData)}
				</ul>
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
