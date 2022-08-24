import styleAuthorizedServices from './AuthorizedServices.module.css'
import logoJacto from '../../../public/assets/jacto-logo.svg'
import logoKarcher from '../../../public/assets/Karcher-logo.png'
import logoKarcherWhite from '../../../public/assets/karcher-logo-white.png'
import logoLavor from '../../../public/assets/lavor-wash-logo-png-transparent.png'
import logoTramontina from '../../../public/assets/Tramontina-Logo.svg'
import logoWap from '../../../public/assets/wap-2.svg'

export function AuthorizedServices() {
  return (
    <div >
    <div className={styleAuthorizedServices.ul }>
    <h2 className={styleAuthorizedServices.h2 }id='authorized'>Somos Autorizada</h2>
    <ul className={styleAuthorizedServices.content }>
  <h2 className={styleAuthorizedServices.h2 }>HIDROMAR</h2>
  <img src={logoJacto}alt='Logo da jactor'/>

  

  <img className={styleAuthorizedServices.imgKarcher} src={logoKarcher}alt='Logo da Karcher'/>

  <img className={styleAuthorizedServices.imgKarcherWhite } src={logoKarcherWhite}alt='Logo da Karcher'/>





  <img src={logoLavor}alt='Logo da lavor'/>
  <img src={logoTramontina}alt='Logo da tramontina'/>
  <img src={logoWap}alt='Logo da wap'/>
</ul>
    </div>
 
    </div>
  )
}

