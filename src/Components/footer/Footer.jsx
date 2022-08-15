import styleFooter from './Footer.module.css'
import logoAssitencia from '../../assets/logo-R.A.svg'
import { BiMap } from "react-icons/bi"
import { BiPhone } from "react-icons/bi"
import { RiMailLine } from "react-icons/ri"
import { BsInstagram } from "react-icons/bs";


export  function Footer() {
  return (
    <div className={styleFooter.container}>
        <div className={styleFooter.content}>
        <img className={styleFooter.img} src={logoAssitencia}alt='Logotipo da assistencia'/>
        <div className={styleFooter.SocialMidia}>
          <h3>Contato</h3>
        <p> <RiMailLine className={styleFooter.SocialMidiaIcon}/> <a href="mailto:rafranca.assistencia@gmail.com">rafranca.assistencia@gmail.com</a></p>
        <BiPhone className={styleFooter.SocialMidiaIcon}/>
        <BiMap className={styleFooter.SocialMidiaIcon}/>
        <BsInstagram className={styleFooter.SocialMidiaIcon}/>
        </div>
       
        <div className={styleFooter.contentMap}>
          <iframe className={styleFooter.iframe} 
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14645.346487434714!2d-46.8572709!3d-23.4122042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1d8845450e27%3A0xbb3b9324ceb95352!2sR.A.%20Assist%C3%AAncia!5e0!3m2!1spt-BR!2sbr!4v1660591921158!5m2!1spt-BR!2sbr"
           width="350"
           height="200"
           frameborder="0"
           style={{border:18}}
           allowfullscreen=""
           aria-hidden="false"
           tabindex="0"></iframe>
        </div>
      
        </div>
        
    </div>
  )
}
