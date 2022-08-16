import styleFooter from './Footer.module.css'
import logoAssitencia from '../../assets/Logo.svg'
import { FooterContact } from '../footerContact/FooterContact'
import { Map } from '../map/Map'
import { NavegationFooter } from '../navegationFooter/NavegationFooter'
import { BiCopyright } from "react-icons/bi"

export  function Footer() {
  return (
    <>
    <div className={styleFooter.container}>
        <div className={styleFooter.content}>
        <img className={styleFooter.img} src={logoAssitencia}alt='Logotipo da assistencia'/>
        <NavegationFooter/>
        <FooterContact/>
        <Map/>
        </div>
        
    </div>
        <div className={styleFooter.contentCopywrite}>
        <p className={styleFooter.p}> <BiCopyright/>2022 R.A Assitência técnica</p>

        </div>
    </>
  )
}
