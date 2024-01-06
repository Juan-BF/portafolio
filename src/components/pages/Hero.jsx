import Button from "../Button"
import styles from "../styles/Hero.module.css"


const Hero = () => {
    
    return (
        <>
            <section id="Hero" className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.informacion}>
                        <h1 className={styles.title}>Desenvolvedor Front-End React</h1>
                        <p className={styles.description}>
                            Olá, meu nome é Juan Bejarano. Um apaixonado desenvolvedor <strong>
                                Front-end </strong> em <strong>React</strong> com o objetivo de se tornar um <strong>Full-Stack.</strong>
                        </p>
                        <div className={styles.social}>
                            <a href="https://www.linkedin.com/in/juan-vicente-bejarano-fernandez-062089239/"><div></div>
                            </a>
                            <a href="https://github.com/Juan-BF"><div></div></a>
                            <Button
                            textInf='Resumo'
                            />
                        </div>
                    </div>
                    <div className={styles.fotop}></div>
               
                </div>

                <div className={styles.stack}>
                    <h3>
                        Minhas Stack
                    </h3>

                    <ul>
                        <li><img src="/stack/html.png" alt="imagen html" /></li>
                        <li><img src="/stack/css.png" alt="imagen de css" />
                        </li>
                        <li><img src="/stack/javascript.png" alt="imagen de javscript" /></li>
                        <li><img src="/stack/typescript.png" alt="imagen de typescrips" />
                        </li>
                        <li><img src="/stack/react.png" alt="imagen de react" />
                        </li>
                        <li><img src="/stack/sass.png" alt="imagen de sass" /></li>
                        <li><img src="/stack/tailwindcss.png" alt="imagen de tailwindcss" />
                        </li>
                    </ul>
                    
                </div>

            </section>

        </>
    )
}

export default Hero
