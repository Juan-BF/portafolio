import { useState } from "react"
import styles from "../styles/About.module.css"


const About = () => {


    const [mostrarMas, setMostrarMas] = useState(true);


    const toggleMostrarMas = () => {
        setMostrarMas(!mostrarMas);
    };

    return (
        <>
            <section id="About" className={styles.boxAbout}>
                <h1>Sobre mim.</h1>
                <div className={styles.about}>
                    <div className={styles.aboutImg}></div>
                    <div className={styles.aboutInf}>
                        <h1>Juan Bejarano.</h1>
                        <div className={styles.bios}>
                            {
                                mostrarMas ? <p className={styles.bioCorta} id="bioCorta">
                                    Sou Um programador <strong>Front-End</strong> com um objetivo muito claro tornar-me um profissional <strom>Full-Stack</strom>. Desde que me apaixonei por programação, dediquei meu esforço ao estudo e desenvolvimento com <strong>HTML, CSS, JAVA-SCRIPT, REACT </strong> e a cada dia me esforço para avançar mais, explorando também o mundo do <strong>Back-End</strong>.
                                </p> :
                                    <p className={styles.bioCompleta} id="bioLarga">
                                    Olá, sou Juan Bejarano. Apaixonei-me por programação aos 14 anos, quando tive meu primeiro contato com C#. Comecei com projetos básicos, criando aplicações de desktop e sistemas de vendas. Esse primeiro contato me motivou a iniciar a carreira de informática, onde tive a oportunidade de explorar várias linguagens de programação como<strong> Python, Java, JavaScript, C, C#, Pascal, </strong>além de me aprofundar em marcação com<strong> HTML e CSS</strong>.
                                    <br />
                                    <br />
                                    Concluí meu projeto de conclusão usando<strong> C# </strong>para desenvolver uma base de dados. Posteriormente, comecei a procurar emprego como programador, ao mesmo tempo em que oferecia aplicações de desktop para escolas e instituições.
                                    <br />
                                    <br />
                                    Logo surgiu a oportunidade de me mudar para o Brasil, o que me motivou ainda mais a me concentrar na programação web. A curva de aprendizado e as vastas oportunidades oferecidas pelo mercado brasileiro me levaram a focar nesse campo.
                                    </p>
                            }
                            <h4 className={styles.masInfo} onClick={toggleMostrarMas}>{mostrarMas ? 'Conheça um pouco mais sobre mim.' : 'Fechar Bio '}</h4>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}

export default About
