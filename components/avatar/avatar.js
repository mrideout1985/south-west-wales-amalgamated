import mitt from "next/dist/next-server/lib/mitt"
import styles from "./avatar.module.scss"

export default function Avatar({ name, picture }) {
	return (
		<div className={styles.avatar}>
			{picture ? <img src={picture} className={styles.image} alt={name} /> : null}
			{!name ? null : <div className={styles.text}>{name}</div>}
		</div>
	)
}
