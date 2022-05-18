import React from "react";
import styles from "./rep-card.module.scss";

const RepCard = (props) => {
    // eslint-disable-next-line no-unused-vars

    return (
        <div className={styles.card}>
            <div className={styles.cardinterior}>
                <div className={styles.top}>
                    <img src={props.image} alt={props.image} />
                </div>

                <div className={styles.bottom}>
                    <span>
                        <h2>{props.name}</h2>
                        <h4>{props.bio}</h4>
                    </span>
                    {!props.email ? null : (
                        <a href={`mailto:${props.email}`}>Contact</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RepCard;
