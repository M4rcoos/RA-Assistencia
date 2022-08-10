import React from "react"
import styles from './Header.module.css'
import {BsWrench} from "react-icons/bs"



export function Header() {
  return (
    <header className={styles.header}>
         
            <BsWrench color="#1396C5"/>
        <strong >
            RA Assistencia tecnica
            </strong>
    </header>
  );
}
