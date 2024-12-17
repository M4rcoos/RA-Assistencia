import styleAbout from './About.module.css'

export function About() {
  return (
    <div className={styleAbout.container}>
      <h1 className={styleAbout.h1} id='about'>Sobre</h1>
      <div className={styleAbout.containerText}>
        <p className={styleAbout.p}>
          A RA Assistência Técnica é uma empresa fundada por Valcir França,
          com mais de 20 anos de experiência no mercado. Especializada no conserto de eletrodomésticos e mangueiras hidráulicas,
          somos referência em qualidade e confiança na cidade de Cajamar. Nosso compromisso é oferecer soluções rápidas,
          eficientes e personalizadas para cada cliente, garantindo excelência em cada serviço prestado. Na RA Assistência Técnica,
          sua satisfação é a nossa prioridade!
        </p>
      </div>
    </div>
  );
}
