import { useEffect, useState } from "react";
import styles from"./Navbar.module.css"

export function Navbar() {
const [toggle,setToggle] =useState(true)

const toggleHumbuger =()=>{
  setToggle(!toggle)
}   

  return (
   
<nav className={`${styles.nav} ${toggle&&styles.active}`}>  
       <button onClick={toggleHumbuger} className={styles.buttonMobile }>
       <span className={styles.hamburger} ></span>
       </button>
<ul className={styles.button}>
  <li  className={styles.li}><a href="#about">Sobre</a></li>
  <li  className={styles.li}><a href="#services">Serviços</a></li>
  <li  className={styles.li}><a href="#authorized">Autorizadas</a></li>
  <li  className={styles.li}><a href='#contact'>Contato</a></li>
</ul>
</nav>
  );
}

 