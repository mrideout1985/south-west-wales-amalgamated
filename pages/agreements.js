import React, { useState, useEffect, useRef } from "react";
import { getAgreementsData } from "../lib/api";
import { useAgreement } from "../hooks/useAgreement";
import styles from "../styles/Agreements.module.scss";
import Meta from "../components/meta/meta";

const Agreements = ({ data }) => {
    const [agreement, setAgreement] = useState();
    const [selected, setIsSelected] = useState(0);
    const displayAgreement = useAgreement(agreement);
    const categoriesRef = useRef([]);
    const defaultCategoryOnLoad = "998375c9-a066-4aee-a253-2e3f518595a9";

    useEffect(() => {
        categoriesRef.current = categoriesRef.current.slice(
            0,
            filterCategories().length
        );
        setAgreement(defaultCategoryOnLoad);
    }, []);

    useEffect(() => {
        const focusableElements = categoriesRef.current;
        const firstTabStop = focusableElements[0];
        const lastTabStop = focusableElements[focusableElements.length - 1];

        const handleArrowKey = (event) => {
            if (event.key === "ArrowRight") {
                if (selected !== focusableElements.length - 1) {
                    focusableElements[selected + 1].focus();
                    setIsSelected(selected + 1);
                }
                if (selected === focusableElements.length - 1) {
                    firstTabStop.focus();
                    setIsSelected(0);
                }
            }

            if (event.key === "ArrowLeft") {
                if (selected !== 0) {
                    focusableElements[selected - 1].focus();
                    setIsSelected(selected - 1);
                }
                if (selected === 0) {
                    lastTabStop.focus();
                    setIsSelected(focusableElements.length - 1);
                }
            }
        };

        document.addEventListener("keydown", handleArrowKey);

        return () => {
            document.removeEventListener("keydown", handleArrowKey);
        };
    }, [selected]);

    const filterCategories = () => {
        let policyRefs = [];
        data.map((e) => e.categories.map((e) => policyRefs.push(e._ref)));
        let filteredPolicyRefs = [...new Set(policyRefs)];
        return filteredPolicyRefs;
    };

    const handleTab = (category, number) => {
        setAgreement(category);
        setIsSelected(number);
    };

    const handleButtons = () => {
        const isDisabled = (index) => (selected === index ? 0 : -1);
        const isSelected = (index) =>
            selected === index ? styles.active : styles.links;
        let names = ["other", "postal", "time-off", "parcel force"];

        return filterCategories().map((category, i) => {
            return (
                <button
                    role="tab"
                    tabIndex={isDisabled(i)}
                    ref={(el) => (categoriesRef.current[i] = el)}
                    className={isSelected(i)}
                    key={i}
                    onClick={() => handleTab(category, i)}
                >
                    {names[i]}
                </button>
            );
        });
    };

    return (
        <div className={styles.agreements}>
            <Meta title={"AGREEMENTS"}>
                <meta name="description" content="Agreements" />
            </Meta>
            <div className={styles.pagetitle}>
                <h1>Agreements</h1>
            </div>
            <div className={styles["nav-links"]}>{handleButtons()}</div>
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
    );
};

export default Agreements;

export async function getStaticProps() {
    const agreementData = await getAgreementsData();
    return {
        props: { data: agreementData },
    };
}
