import { Link } from 'react-router-dom'
import { PopupButton } from "react-calendly"
import useLangContext from "../../hooks/useLangContext.jsx";
import { MainCards, Security } from '../../components/index.js'
import { screensHome } from '../../assets/img/index.js'
import './styles.css'


const Home = () => {
    
    const { lang } = useLangContext();
    return (
        <div>
            <section className='section-home'>
                <div className='home-container'>
                    <h1 className="home-title" key={lang}>
                        {lang === 'es' ? 'Descubre el poder' : 'Discover the power'}
                    </h1>
                    <h1 className="home-title" key={lang+1}>
                        {lang === 'es' ? 'del trading' : 'of trading'}
                    </h1>
                    <p className="home-subtitle" key={lang+2}>
                        {lang === 'es' ? 'Tu puerta del entrada al' : 'Your gateway to'}
                    </p>
                    <p className="home-subtitle" key={lang+3}>
                        {lang === 'es' ? 'éxito financiero.' : 'financial success.'}
                    </p>
                    <div className="button-container">
                        <Link to="/Contact">
                            <button className="green-button" key={lang+4}>
                                {lang === 'es' ? 'CONSULTANOS' : 'ASK US'}
                            </button>
                        </Link>
                        <PopupButton
                            className="green-button-calendly"
                            styles={{ backgroundColor: 'transparent', border: 'solid 1px #01e481', padding: '9px' }}
                            url="https://calendly.com/backlab-strategies"
                            rootElement={document.getElementById("root")}
                            key={lang+5}
                            text={lang === 'es' ? 'AGENDÁ UN TURNO' : 'SCHEDULE A SHIFT'}
                        />

                    </div>
                </div>
                <div>
                    <img src={screensHome} alt="pantallas" className='pantallas-home' />
                </div>
            </section>
            <section className='home-cards-section'>
                <h1 className='home-cards-title' key={lang+6}>
                    {lang === 'es' ? 'Características ' : 'Fundamental '}    
                    <span>
                        {lang === 'es' ? 'Fundamentales' : 'Characteristics'}
                    </span>
                </h1>
                <p className='home-cards-description' key={lang+7}>
                    {lang === 'es' ? 'Estas son algunas de las características fundamentales de BackLab Strategies.' : 'Here are some fundamental features of BackLab Strategies.'}
                    {lang === 'es' ? 'Lea la documentación a continuación y ante cualquier duda contáctese con nosotros.' : 'Read the documentation below and if you have any questions contact us.'}
                </p>
                <div className="home-cards-container">
                    <MainCards />
                    <div className="banner-container">
                        <div className="banner-subcontainer">
                            <h3 className='banner-title'>Back
                                <strong style={{ fontWeight: '600' }}>Lab</strong>
                                <br />
                                Strategies
                            </h3>
                            <div className="banner-text-container">
                                <h4 
                                    className='banner-text'
                                    style={{ fontWeight: '400' }}
                                    key={lang+10}>
                                        <strong className='banner-text' style={{ fontWeight: '800' }} key={lang+9}>
                                            {lang === 'es' ? 'Invertí ' : 'Invest '}
                                        </strong>
                                    {lang === 'es' ? 'con Inteligencia' : 'with Intelligence'}
                                </h4>
                                <h4 
                                    className='banner-text' 
                                    style={{ fontWeight: '400' }}
                                    key={lang+11}>
                                        <strong className='banner-text' style={{ fontWeight: '800' }}>
                                            {lang === 'es' ? 'Operá ' : 'Execute ' }
                                        </strong>
                                    {lang === 'es' ? 'con Estrategia' : 'with Strategy'}
                                </h4>
                            </div>
                            <Link to="/Contact">
                                <button className='blue-button' key={lang+12}>
                                    {lang === 'es' ? 'CONSULTANOS' : 'ASK US'}
                                </button>
                            </Link>

                        </div>
                        <div className='lineal-vector' alt="" />
                    </div>
                </div>
                <Security />
            </section >
        </div >
    )
}

export default Home