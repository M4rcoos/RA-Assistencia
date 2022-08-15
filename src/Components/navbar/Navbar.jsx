import styles from"./Navbar.module.css"

export function Navbar() {
  return (
    
<nav className={styles.nav}>

<a href="#about"><button className={styles.button} >Sobre</button></a>

<a href="#services"><button className={styles.button}>Serviços</button></a>
<a href="#authorized"><button className={styles.button}>Autorizadas</button> </a>
<a href='#contact'><button className={styles.button}>Contato</button></a>
</nav>
  
     
      
  );
}

 