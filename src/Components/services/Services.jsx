import stylesServices from './Services.module.css'

export  function Services() {
  return (
      <div className={ stylesServices.container } >
        <h2 className={ stylesServices.h2 }>Serviços</h2>
    <div className={ stylesServices.content }>
    <ul>
  <li><p>Maquina de lavar roupas</p><img src='src\assets\Maquina-de-lavar.png'alt='Imagem de uma maquina de lavar roupas'/></li>
  <li><p>lavadoras de alta pressão</p><img src='src\assets\lavadoura-removebg-preview.png'alt='Imagem de uma lavadora de alta pressão'/></li>
  <li><p>Aspirador de pó </p><img src='src\assets\Aspirador.png'alt='Imagem de um aspirador'/></li>
  <li><p>Ferro de passar</p> <img src='src\assets\ferro-de-passar.png'alt='Imagem de um ferro de passar'/></li>
  <li><p>Micro-ondas</p> <img src='src\assets\micro-ondas.png'alt='Imagem de um micro-ondas'/></li>
  <li><p>Mangueiras hidráulicas</p>  <img src='src\assets\Mangueira.png'alt='Imagem de mangueiras hidráulicas'/></li>
  <li><p>Linha de furadeiras e esmerilhadeiras</p>  <img src='src\assets\Linha-construcao.png'alt='Imagem de uma furadeira '/></li>
</ul>
    </div>
    

    </div>
  )
}
