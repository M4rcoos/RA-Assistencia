import styleAutorizedServices from './AuthorizedServices.module.css'

export function AuthorizedServices() {
  return (
    <div >
    <div className={styleAutorizedServices.ul }>
    <h2 className={styleAutorizedServices.h2 }id='authorized'>Somos Autorizada</h2>
    <ul className={styleAutorizedServices.content }>
  <img src='src\assets\jacto-logo.svg'alt=''/>
  <img src='src\assets\Karcher-logo.png'alt=''/>
  <img src='src\assets\Tramontina-Logo.svg'alt=''/>
  <img src='src\assets\lavor-wash-logo-png-transparent.png'alt=''/>
  <img src='src\assets\wap-2.svg'alt=''/>
  <h2 className={styleAutorizedServices.h2 }>HIDROMAR</h2>
</ul>
    </div>
 
    </div>
  )
}

