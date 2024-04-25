import { useState, useRef, useEffect } from 'react'
import useLangContext from '../../hooks/useLangContext'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { Faq } from '../../components'
import { contactImg, socialMedia } from '../../assets/img'
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

const Contact = () => {

    const { lang } = useLangContext()
    
    const form = useRef()

    const [ formData, setFormData ] = useState({
        name: '',
        tradingExp: '',
        actives: '',
        email: '',
        message: ''
    })

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {

        formData.name && formData.email && formData.message && formData.tradingExp && formData.actives !== '' ?
        setIsDisabled(false) : setIsDisabled(true)
    
    }, [formData])

    const handleOnChange = (e) => {     
            
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    const throwSuccessPopUp = () => {
        toast.success( lang === 'es' ? 'Formulario enviado correctamente!' : 'Form sent successfully!', {
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
        emailjs.send('backlab_contact', 'template_1', formData, 'KiJwZhBP7HAn8OxG1')
            .then(() => {
                console.log(formData)
                throwSuccessPopUp()
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                form.current.reset()
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className="contact-section">
            <div className="titleInfo-container" style={{ marginTop: '0' }} >
                <h2 className='title' key={lang}>
                    {lang === 'es' ? 'Contactanos' : 'Contact Us'}
                </h2>
                <h3 className='info' key={lang+1}>
                    {lang === 'es' ? 'Completá el formulario y te enviaremos una propuesta a tu medida' : 'Complete the form and we will send you a proposal to your terms'}    
                </h3>
            </div>
            <ToastContainer />
            <div className='form-container gradient-border'>

                <form ref={form} onSubmit={sendEmail}>
                    <span>
                        <div>
                            <label htmlFor="name" key={lang+2}>
                                {lang === 'es' ? 'Nombre' : 'Name'}
                            </label>
                            <input
                                id='name'
                                type="text"
                                placeholder={lang === 'es' ? 'Juan' : 'John'}
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
                                placeholder={lang === 'es' ? 'juan@gmail.com' : 'john@gmail.com'}
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
                            <h4 htmlFor="" key={lang+3}>
                                { lang === 'es' ? '¿Tenés experiencia en trading?' : '¿Do you have trading experience?' }
                            </h4>
                            <span>
                                <label htmlFor="tExpY" key={lang+4}>
                                    { lang === 'es' ? 'Si' : 'Yes' }
                                </label>
                                <input
                                    id='tExpY'
                                    type="radio"
                                    name='tradingExp'
                                    onClick={handleOnChange}
                                    value='Sí'
                                    required
                                />
                                <label htmlFor="tExpN" >No</label>
                                <input
                                    id='tExpN'
                                    type="radio"
                                    name='tradingExp'
                                    onClick={handleOnChange}
                                    value='No'
                                    required
                                />
                            </span>
                        </div>
                        <div>
                            <h4 key={lang+5}>
                                { lang === 'es' ? '¿Cuantos activos necesitas testear?' : 'How many assets need to test?' }
                            </h4>
                            <span>
                                <label htmlFor='actives1'>1-3</label>
                                <input
                                    id='actives1'
                                    type="radio"
                                    name='actives'
                                    onClick={handleOnChange}
                                    value='1-3'                                    
                                    required
                                />
                                <label htmlFor='actives2'>4-10</label>
                                <input
                                    id='actives2'
                                    type="radio"
                                    name='actives'
                                    onClick={handleOnChange}
                                    value='4-10'
                                    required
                                />
                                <label htmlFor='actives3'>+10</label>
                                <input
                                    id='actives3'
                                    type="radio"
                                    name='actives'
                                    onClick={handleOnChange}
                                    value='10+'
                                    required
                                />
                            </span>
                        </div>
                    </span>
                    <label htmlFor='message' key={lang+6}>
                        {lang === 'es' ? 'Tu mensaje' : 'Your message'}
                    </label>
                    <textarea
                        id='message'
                        name="message"
                        minLength="20" cols=""
                        rows=""
                        placeholder={lang === 'es' ? 'Escribe aquí...' : 'Write here...'}
                        required
                        onChange={handleOnChange}
                        value={formData.message}
                        key={lang+7}
                    />
                    <button type='submit' className= 'submit-button' disabled={isDisabled} key={lang+8} >
                        {lang === 'es' ? 'Enviar' : 'Send'}
                    </button>
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