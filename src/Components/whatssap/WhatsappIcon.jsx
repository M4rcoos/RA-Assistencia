import style from './WhatsappIcon.module.css'
import iconWhatssap from '../../../public/assets/Icon-whats.svg'

export function WhatsappIcon() {

  return  (
  <div className={style.content}>
     <a href="https://wa.me/5511943409897?text=Ol%C3%A1%20Gostaria%20de%20consultar%20um%20serviço" target='blank'>
         <img src={iconWhatssap}
         alt="Whatsapp" />
         </a>
  </div>)
}


             
            