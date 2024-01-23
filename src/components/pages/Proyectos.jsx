import styles from "../styles/Proyectos.module.css"
import projImg1 from '../../imagenes/proyectos/ivanproj.png'
import projImg2 from '../../imagenes/proyectos/loading.png'
import projImg3 from '../../imagenes/proyectos/imgGithubAPI.png'
import Button from "../Button"



const Proyectos = () => {
  return (
    <>
      <section id="Projectos" className={styles.boxProyectos}>
        <h1>Projetos.</h1>
        <div className={styles.listaProjectos}>
          <ul className={styles.cardsList}>
            <li className={styles.cards}>
              <img src={projImg1} alt="" />
              <div className={styles.carInf}>

                <h1>Portfólio Fotográfico Profissional</h1>
                <h3>Objetivos exigidos pelo cliente:</h3>
                <p>
                  Mostrar Profissionalismo.✅
                  Facilitar a Navegação.✅<br />
                  Demonstrar Diversidade. ✅
                  Gerar Impacto Visual. ✅
                  Estabelecer Contato. ✅<br />
                </p>
                <h3>Desafios Importantes:</h3>
                <h4> Otimização de Imagens:✅</h4>
                <p>Garantir que todas as imagens estejam otimizadas para a web, mantendo a qualidade visual sem sacrificar o desempenho de carregamento.<br /></p>
                <h4>Consistência Estilística.✅</h4>
                <h4>Adaptabilidade Responsiva.✅</h4>

                <div>
                  <Button />
                </div>
              </div>

            </li>
            <li className={styles.cards}>
              <img src={projImg2} alt="" />
              <div className={styles.carInf}>
                <h1>Sign Animado</h1>
                <p>Projeto GitHub API: Simplifica o acesso e manipulação de dados no GitHub, facilitando a integração e automação de tarefas para desenvolvedores.</p>
                <Button />

              </div>
            </li>
            <li className={styles.cards}>
              <img src={projImg3} alt="" />
              <div className={styles.carInf}>
              <h1>Projeto GitHub Api</h1>
                <p>Projeto GitHub API: Simplifica o acesso e manipulação de dados no GitHub, facilitando a integração e automação de tarefas para desenvolvedores.</p>
                <Button />

              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Proyectos
