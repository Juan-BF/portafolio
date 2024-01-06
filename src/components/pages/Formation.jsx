import styles from "../styles/Formation.module.css"

const Formation = () => {
    return (
        <>
            <section id="Formacaos" className={styles.formation}>
                <h2>Portfólio.</h2>
                <h3>Explore abaixo os projetos que deram vida às minhas ideias e paixões, cada um contando sua própria história única.🧩</h3>
                <div className={styles.informationbox}>
                    <div className={styles.formationItem}>
                        <div className={styles.infoUni}>
                            <h1>Universidad IUTIRLA</h1>
                            <p>Técnico Superior Universitário em Informática é um profissional altamente qualificado para excelência no desenvolvimento, análise e implementação de sistemas de informação gerencial. Além disso, possui habilidades avançadas em administração de projetos informáticos. Seu foco é otimizar e acelerar o tempo de resposta, contribuindo assim para a tomada eficiente de decisões em qualquer ambiente empresarial.  </p>
                            <a href="https://iutirlaoficial.com/wp-content/uploads/2022/09/5-PENSUM-INFORMATICA.pdf" target="_blank" rel="noreferrer" >Grade Curricular</a>
                        </div>
                        <img src="/formation/iutirla.jpg" alt="imagen de iutirla" />
                    </div>
                    <div className={styles.formationItem}>
                    <img src="/formation/devquest.png" alt="imagen de deve dobro" />
                        <div className={styles.infoUni}>
                            <h1>DevQuest</h1>
                            <p>Curso de Desenvolvimento Web FullStack, estrategicamente elaborado para aprimorar as habilidades técnicas dos participantes por meio de extensivas sessões de monitoria, mentorias especializadas, resolução de desafios conduzida por desenvolvedores experientes, conteúdo técnico direcionado e organizado, e avaliação contínua do progresso, juntamente com uma análise curricular. A abordagem do curso se concentra na prática constante, incorporando as mais recentes tecnologias do setor, e incentiva a aplicação efetiva de metodologias de estudo comprovadamente eficazes, promovendo assim o desenvolvimento proficiente das habilidades necessárias para um desenvolvedor FullStack.  </p>
                            <a href="https://iutirlaoficial.com/wp-content/uploads/2022/09/5-PENSUM-INFORMATICA.pdf" target="_blank" rel="noreferrer" >Grade Curricular</a>
                        </div>                       
                    </div>                  
                </div>

            </section >
        </>
    )
}

export default Formation
