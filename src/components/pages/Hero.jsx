
import imagenes from "../../imagenes/imagenes"
import styles from "../styles/Hero.module.css"


const Hero = () => {

    return (
        <>
            <section id="Hero" className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.informacion}>
                        <h2>Ola!</h2>
                        <h1 className={styles.title}>Sou Juan Bejarano
                        </h1>
                        <p className={styles.description}>
                            <span>Técnico Superior em Informática</span> com +8 anos de experiência em tecnologia, incluindo 1 ano como especialista em <span>telecomunicações</span>.<br />
                            <span className={styles.frontend} >Especializando-me em Front-end.</span>
                        </p>
                        <div className={styles.social}>
                            <a href="https://github.com/Juan-BF" target="_blank" rel="noopener noreferrer" className={styles.Btn}>
                                <span className={styles.svgContainer}>
                                    <svg fill="white" viewBox="0 0 496 512" height="2em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                  
                                    <span></span>
                                </span>
                                
                                <span className={styles.bg}></span>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=55054996959667" target="_blank" rel="noopener noreferrer" className={styles.Btn}>
                                <span className={`${styles.svgContainer} ${styles.svgContainerw}`}>
                                    <svg  viewBox="0,0,256,256"  height="2em"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g></svg>
                                    <span></span>
                                </span>
                                <span className={`${styles.bg} ${styles.bgw}`}></span>
                            </a>
                            <a href="https://www.linkedin.com/in/juan-vicente-bejarano-fernandez-062089239/" target="_blank" rel="noopener noreferrer" className={styles.Btn}>
                                <span className={`${styles.svgContainer} ${styles.svgContainerl}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="50px" height="2em">
                                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                            <g transform="scale(8.53333,8.53333)">
                                                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.496,8.403c0.842,0 1.403,0.561 1.403,1.309c0,0.748 -0.561,1.309 -1.496,1.309c-0.842,0.001 -1.403,-0.561 -1.403,-1.309c0,-0.748 0.561,-1.309 1.496,-1.309zM12,20h-3v-8h3zM22,20h-2.824v-4.372c0,-1.209 -0.753,-1.488 -1.035,-1.488c-0.282,0 -1.224,0.186 -1.224,1.488c0,0.186 0,4.372 0,4.372h-2.917v-8h2.918v1.116c0.376,-0.651 1.129,-1.116 2.541,-1.116c1.412,0 2.541,1.116 2.541,3.628z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span></span>
                                </span>
                                <span className={`${styles.bg} ${styles.bgl}`}></span>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=55054996959667" target="_blank" rel="noopener noreferrer"><div></div>
                            </a>
                            <a className={styles.btnBoox} href="https://drive.google.com/file/d/1hLRg-QS15Z606knVmoskAAf8GsAZ_hMw/view?usp=drive_link" target="_blank" rel="noopener noreferrer" >
                                <span> Currículo Vitae</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.fotop}></div>
                </div>

                <div className={styles.stack}>
                    <h3>
                        Minhas Stack
                    </h3>

                    <ul>

                        <li><img src={imagenes.html} alt="imagen html" /></li>
                        <li><img src={imagenes.css} alt="imagen de css" />
                        </li>
                        <li><img src={imagenes.javascript} alt="imagen de javascript" /></li>
                        <li><img src={imagenes.typescript} alt="imagen de typescrips" />
                        </li>
                        <li><img src={imagenes.react} alt="imagen de react" />
                        </li>
                        <li><img src={imagenes.sass} alt="imagen de sass" /></li>
                        <li><img src={imagenes.tailwindcss} alt="imagen de tailwindcss" />
                        </li>
                    </ul>

                </div>

            </section>

        </>
    )
}

export default Hero
