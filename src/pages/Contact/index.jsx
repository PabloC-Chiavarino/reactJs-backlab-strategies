import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { Faq } from '../../components'
import { contactImg, socialMedia } from '../../assets/img'
import './styles.css'

const Contact = () => {

    const formData = useRef()

    const sendEmail = (event) => {

        event.preventDefault()
        emailjs.sendForm('backlab_contact', 'template_1', formData.current, 'KiJwZhBP7HAn8OxG1')
            .then((result) => {
                console.log(result.text)
                formData.current.reset()
            }
            )
            .catch((err) => console.log(err))
    }

    return (
        <section className="contact-section">
            <div className="titleInfo-container" style={{ marginTop: '0' }} >
                <h2 className='title'>Contáctanos</h2>
                <h3 className='info'>Completá el formulario y te enviaremos una propuesta a tu medida</h3>
            </div>
            <div className='form-container gradient-border'>
                <form ref={formData} onSubmit={sendEmail}>
                    <span>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" placeholder='Juan' name='user_name' required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder='juan@gmail.com' name='user_email' required />
                        </div>
                    </span>
                    <span>
                        <div>
                            <h4 htmlFor="">¿Tenés experiencia en trading?</h4>
                            <span>
                                <label htmlFor="yes">Sí</label>
                                <input type="radio" name='user_tradingExp' value='Sí' required />
                                <label htmlFor="no">No</label>
                                <input type="radio" name='user_tradingExp' value='No' required />
                            </span>
                        </div>
                        <div>
                            <h4>¿Cuántos activos te gustaría testear?</h4>
                            <span>
                                <label htmlFor="a">1-3</label>
                                <input type="radio" id='a' name='user_actives' value='1-3' required />
                                <label htmlFor="b">4-10</label>
                                <input type="radio" id='b' name='user_actives' value='4-10' required />
                                <label htmlFor="c">+10</label>
                                <input type="radio" id='c' name='user_actives' value='10+' required />
                            </span>
                        </div>
                    </span>
                    <label htmlFor='message'>Tu mensaje</label>
                    <textarea name="user_message" minLength="20" cols="" rows="" placeholder='Mensaje' required />
                    <button type='submit' className='submit-button'>Enviar</button>
                </form>
                <div className="form-subcontainer">
                    <img className='gradient-border-bottom' style={{ height: '556px' }} src={contactImg} alt="" />
                    <img className='form-bg' src={socialMedia} alt="" />
                </div>
            </div>
            < Faq />
        </section>
    )
}

export default Contact