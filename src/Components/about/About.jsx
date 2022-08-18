import styleAbout from './About.module.css'

export function About() {
  return (
    <div className={styleAbout.container}>
        <h1 className={styleAbout.h1} id='about'>Sobre</h1>
      <div className={styleAbout.containerText}>
        <p className={styleAbout.p}>
          {" "}
          Meu nome é valcir e eu fundei a Polvitec em 1900 e bolinhas
          minus asperiores, consequuntur neque ullam beatae ea officiis pariatur
          totam suscipit. Autem, delectus ratione placeat quibusdam fuga magnam
          voluptas suscipit. Ut.<br/> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum, temporibus odit sit est aliquid tempora
          tenetur culpa. Velit, nulla esse, doloribus, omnis repudiandae nostrum
          obcaecati provident reprehenderit vero saepe consectetur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum, temporibus <br/>odit sit est aliquid tempora
          tenetur culpa. Velit, nulla esse, doloribus, omnis repudiandae nostrum
          obcaecati provident reprehenderit vero saepe consectetur?<br/> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum, temporibus odit sit est aliquid tempora
          tenetur culpa. Velit, nulla esse, doloribus, omnis repudiandae nostrum
          obcaecati provident reprehenderit vero saepe consectetur?
        </p>
      </div>
    </div>
  );
}
