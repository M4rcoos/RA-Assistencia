import styleFooter from './Footer.module.css'
import logoAssitencia from '../../../public/assets/Logo.svg'
import { FooterContact } from '../footerContact/FooterContact'
import { Map } from '../map/Map'
import { NavegationFooter } from '../navegationFooter/NavegationFooter'
import { BiCopyright } from "react-icons/bi"
import { SocialMedia } from '../socialMedia/SocialMedia'

export function Footer() {
  return (
    <>
      <div className={styleFooter.container}>
        <div className={styleFooter.content}>
          <div className={styleFooter.containerMarca} >
            <img className={styleFooter.img} src={logoAssitencia} alt='Logotipo da assistencia' />
            <SocialMedia />
          </div>
          <NavegationFooter />
          <FooterContact />

          <Map />
        </div>

      </div>
      <div className={styleFooter.contentCopywrite}>
        <p className={styleFooter.p}> <BiCopyright />2022 R.A Assitência técnica</p>
        <p className={styleFooter.p}> <BiCopyright />Feito por <a href="https://www.instagram.com/marcoos.v/">Marcos Vinicius</a></p>
      </div>
    </>
  )
}
