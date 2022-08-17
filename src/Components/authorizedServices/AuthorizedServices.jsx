import styleAutorizedServices from './AuthorizedServices.module.css'

export function AuthorizedServices() {
  return (
    <div >
    <div className={styleAutorizedServices.ul }>
    <h2 className={styleAutorizedServices.h2 }id='authorized'>Somos Autorizada</h2>
    <ul className={styleAutorizedServices.content }>
  <h2 className={styleAutorizedServices.h2 }>HIDROMAR</h2>
  <img src='src\assets\jacto-logo.svg'alt=''/>
  <img src='src\assets\Karcher-logo.jpg'alt=''/>
  <img src='src\assets\lavor-wash-logo-png-transparent.jpg'alt=''/>
  <img src='src\assets\Tramontina-Logo.svg'alt=''/>
  <img src='src\assets\wap-2.svg'alt=''/>
</ul>
    </div>
 
    </div>
  )
}

