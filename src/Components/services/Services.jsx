import stylesServices from './Services.module.css'
import aspirador from '../../../public/assets/Aspirador.png'
import ferro from '../../../public/assets/ferro-de-passar.png'
import lavadoraDeAltaPressao from '../../../public/assets/lavadoura-removebg-preview.png'
import ferramentas from '../../../public/assets/Linha-ferramenta.png'
import liquidificador from '../../../public/assets/Liquidificador.png'
import microOndas from '../../../public/assets/micro-ondas.png'
import mangueiras from '../../../public/assets/carousel-mangueira-removebg-preview.png'
import maquinaDeLavar from '../../../public/assets/Maquina-de-lavar.png'


export  function Services() {
  return (
      <div className={ stylesServices.container } >
        <h2 className={ stylesServices.h2 }id='services'>Serviços</h2>
    <div className={ stylesServices.content }>
    <ul className={stylesServices.ulServices}>
  <li><p>Aspirador de pó </p><img src={aspirador}alt='Imagem de um aspirador'/></li>
  <li><p>Ferro de passar</p> <img src={ferro}alt='Imagem de um ferro de passar'/></li>
  <li><p>lavadoras de alta pressão</p><img src={lavadoraDeAltaPressao}alt='Imagem de uma lavadora de alta pressão'/></li>
  <li><p>Linha de ferramentas</p>  <img src={ferramentas}alt='Imagem de uma furadeira '/></li>
  <li><p>Liquidificador</p>  <img src={liquidificador}alt='Imagem de um liquidificador'/></li>
  <li><p>Micro-ondas</p> <img src={microOndas}alt='Imagem de um micro-ondas'/></li>
  <li><p>Mangueiras hidráulicas</p>  <img src={mangueiras}alt='Imagem de mangueiras hidráulicas'/></li>
  <li><p>Maquina de lavar roupas</p><img src={maquinaDeLavar}alt='Imagem de uma maquina de lavar roupas'/></li>
</ul>
    </div>
    

    </div>
  )
}
