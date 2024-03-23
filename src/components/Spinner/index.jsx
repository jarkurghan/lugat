import React from "react";
import styles from "./style.module.css";

function Spinner() {
    return (
        <div className={styles.overlay}>
            <span className={styles.loader}></span>
        </div>
    );
}

export default Spinner;
