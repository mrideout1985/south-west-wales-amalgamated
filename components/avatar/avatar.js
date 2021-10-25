import styles from "./avatar.module.scss"

export default function Avatar({ name, picture }) {
	return (
		<div className={styles.avatar}>
			<img src={picture} className={styles.image} alt={name} />
			<div className={styles.text}>{name}</div>
		</div>
	)
}
