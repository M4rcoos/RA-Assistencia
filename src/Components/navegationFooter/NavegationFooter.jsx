import styleNavegation from './NavegationFooter.module.css'

export function NavegationFooter() {
  return (
    <div >
        <div className={styleNavegation.title}>
         <h3 className={styleNavegation.h3}>Navegação</h3>
        </div>
         <div className={styleNavegation.container}>
            <a className={styleNavegation.about} href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#authorized">Autorizadas</a>
            <a href="#contact">Contato</a>
        </div>
    </div>
   
  )
}
