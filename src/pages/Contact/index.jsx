import { useState, useRef, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { Faq } from '../../components'
import { contactImg, socialMedia } from '../../assets/img'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    
    const form = useRef()

    const [ formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        formData.name && formData.email && formData.message !== '' ?
        setIsDisabled(false) : setIsDisabled(true)
    }, [formData]
)

    const handleOnChange = (e) => {     
            
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
            console.log(formData)
    }

    const throwSuccessPopUp = () => {
        toast.success('Formulario enviado correctamente!', {
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        })
    }

    const sendEmail = (event) => {

        event.preventDefault()
        emailjs.sendForm('backlab_contact', 'template_1', formData.current, 'KiJwZhBP7HAn8OxG1')
            .then(() => {
                throwSuccessPopUp()
                formData.current.reset()
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className="contact-section">
            <div className="titleInfo-container" style={{ marginTop: '0' }} >
                <h2 className='title'>Contáctanos</h2>
                <h3 className='info'>Completá el formulario y te enviaremos una propuesta a tu medida</h3>
            </div>
            <ToastContainer />
            <div className='form-container gradient-border'>

                <form ref={form} onSubmit={sendEmail}>
                    <span>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input
                                id='name'
                                type="text"
                                placeholder='Juan'
                                name='name'
                                required
                                autoComplete='on'
                                onChange={handleOnChange}
                                value={formData.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id='email'
                                type="text"
                                placeholder='juan@gmail.com'
                                name='email'
                                required
                                autoComplete='on'
                                onChange={handleOnChange}
                                value={formData.email}
                            />
                        </div>
                    </span>
                    <span>
                        <div>
                            <h4 htmlFor="">¿Tenés experiencia en trading?</h4>
                            <span>
                                <label htmlFor="tExpY">Sí</label>
                                <input
                                    id='tExpY'
                                    type="radio"
                                    name='user_tradingExp'
                                    value='Sí'
                                    required
                                />
                                <label htmlFor="tExpN">No</label>
                                <input
                                    id='tExpN'
                                    type="radio"
                                    name='user_tradingExp'
                                    value='No'
                                    required
                                />
                            </span>
                        </div>
                        <div>
                            <h4>¿Cuántos activos te gustaría testear?</h4>
                            <span>
                                <label htmlFor='actives1'>1-3</label>
                                <input
                                    id='actives1'
                                    type="radio"
                                    name='user_actives'
                                    value='1-3'
                                    required
                                />
                                <label htmlFor='actives2'>4-10</label>
                                <input
                                    id='actives2'
                                    type="radio"
                                    name='user_actives'
                                    value='4-10'
                                    required
                                />
                                <label htmlFor='actives3'>+10</label>
                                <input
                                    id='actives3'
                                    type="radio"
                                    name='user_actives'
                                    value='10+'
                                    required
                                />
                            </span>
                        </div>
                    </span>
                    <label htmlFor='message'>Tu mensaje</label>
                    <textarea
                        id='message'
                        name="message"
                        minLength="20" cols=""
                        rows=""
                        placeholder='Mensaje'
                        required
                        onChange={handleOnChange}
                        value={formData.message}
                    />
                    <button type='submit' className= {isDisabled ? 'submit-button disabled' : 'submit-button'} disabled={isDisabled} >Enviar</button>
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