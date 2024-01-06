import styles from "../styles/Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
    const [mensajeEnviado, setMensajeEnviado] = useState(null);
    const [formulario, setFormulario] = useState({
        username: '',
        email: '',
        message: ''

    });
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormulario({ ...formulario, [name]: value });
    };


    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = "service_53ee04k";
        const templateId = "template_lhsq537";
        const apiKey = "4CDojz2-G71dM_wWz";

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then((result) => {
                console.log(result.text)
                setMensajeEnviado("¡Mensaje enviado con éxito!");             
                
            } 
               )
            .catch(error => console.error(error))

        event.preventDefault();

        setFormulario({
            username: '',
            email: '',
            message: '',
        });
    }

    return (
        <>
            <section id="Contato" className={styles.secFormulario}>
                <div className={styles.formulario}>
                    <div className={styles.formularioInf}>
                        <img src=""

                            alt="" />
                        <h1>Pronto para trabalhar
                            junto?</h1>
                        <p>Estou animado pela oportunidade de colaborar com você. Se você tiver alguma dúvida, sugestão, ou apenas quiser entrar em contato, sinta-se à vontade para me enviar uma mensagem.</p>
                    </div>

                    <div className={styles.formularioRe}>
                        <form ref={refForm} action="/procesar_formulario" method="post" onSubmit={handleSubmit}>

                            <label htmlFor="username">Nombre:</label>
                            <input type="text" id="username" name="username" value={formulario.username}
                                onChange={handleChange} required />

                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email" value={formulario.email}
                                onChange={handleChange} required />

                            <label htmlFor="message">Mensaje:</label>
                            <textarea type="text" id="message" name="message" value={formulario.message}
                                onChange={handleChange}></textarea>

                            <input type="submit" value="Enviar" />
                            {mensajeEnviado && <p>{mensajeEnviado}</p>}
                        </form>
                        
                    </div>
                   
                </div>
              
            </section>
        </>
    )
}

export default Contact
