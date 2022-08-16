import { BiMap } from "react-icons/bi"
import { BiPhone } from "react-icons/bi"
import { RiMailLine } from "react-icons/ri"
import { BsWhatsapp }from "react-icons/bs"
import styleFooter from './FooterContact.module.css'


export function FooterContact() {
  return (
  <div>
     <div className={styleFooter.title}>
     <h3 className={styleFooter.h3} id ='contact'>Contato</h3>
     </div>
         
     <div className={styleFooter.Content}>
        <p className={styleFooter.p}>
           <RiMailLine className={styleFooter.Icon}/> 
           <a className={styleFooter.plink} href="mailto:rafranca.assistencia@gmail.com">rafranca.assistencia@gmail.com</a>
           </p>
        <p  className={styleFooter.p}>
          <BiPhone className={styleFooter.Icon}/> <a className={styleFooter.plink} href="tel:+55(11)4448-1049">4448-1049</a> 
        </p>
        <p  className={styleFooter.p}>
          <BsWhatsapp className={styleFooter.Icon}/><a className={styleFooter.plink} 
          href="https://wa.me/5511943409897?text=Ol%C3%A1%20Gostaria%20de%20consultar%20um%20serviço">94340-9897</a>
        </p>
        <p className={styleFooter.p}>
          <BiMap className={styleFooter.Icon}/> Rua: Gilberto de carvalho, 180, <br /> 07792-720 Cajamar, SP
        </p>
        

        </div>
  </div>
)
}
