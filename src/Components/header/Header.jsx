import React from "react"
import styles from './Header.module.css'
import { Navbar } from "../navbar/Navbar";
// import {BsWrench} from "react-icons/bs"
import logoAssitencia from '../../assets/logo-R.A.svg'



export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoAssitencia}alt='Logotipo da assistencia'/>
      <Navbar/>
    </header>
  );
}