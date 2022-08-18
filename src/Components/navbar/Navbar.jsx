import { useEffect, useState } from "react";
import styles from"./Navbar.module.css"

export function Navbar() {
const [toggle,setToggle] =useState(true)

const toggleHumbuger =()=>{
  setToggle(!toggle)
}

  return (
   
<nav className={`${styles.nav} ${toggle&&styles.active}`}>
       <button id='btn-menu' onClick={toggleHumbuger} className={styles.btnMenu }>Menu</button>


<a href="#about"><button className={styles.button} >Sobre</button></a>

<a href="#services"><button className={styles.button}>Serviços</button></a>
<a href="#authorized"><button className={styles.button}>Autorizadas</button> </a>
<a href='#contact'><button className={styles.button}>Contato</button></a>
</nav>
  
     

    
 
      
  );
}

 