import { MainCards, Security } from '../../components/index.js'
import { screensHome, backLabVector1, bannerBg1 } from '../../assets/img/index.js';
import './styles.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <section className='section-home'>
                <div className='home-container'>
                    <h1 className="home-title">Descubre el poder<br /> del Trading</h1>
                    <p className="home-subtitle">Tu puerta de entrada al<br /> éxito financiero. </p>
                    <div className="button-container">
                        <Link to="/Contact">
                            <button className="green-button">CONSULTANOS</button>
                        </Link>
                        <button style={{ color: '#01e481', backgroundColor: 'transparent', border: 'solid 1px #01e481', padding: '9px' }} className="green-button">AGENDÁ UN TURNO</button>
                    </div>
                </div>
                <div>
                    <img src={screensHome} alt="pantallas" className='pantallas-home' />
                </div>
            </section>
            <section className='home-cards-section'>
                <h1 className='home-cards-title'>Características <span>Fundamentales</span></h1>
                <p className='home-cards-description'>Estas son algunas de las características fundamentales de BackLab Strategies.<br />
                    Lea la documentación a continuación y ante cualquiera duda contactese con nosotros.</p>
                <div className="home-cards-container">
                    <MainCards />
                    <div className="banner-container">
                        <div className="banner-subcontainer">
                            <h3 style={{ fontSize: '3rem', fontWeight: '400', color: '#6315FF' }}>Back
                                <strong style={{ fontWeight: '600' }}>Lab</strong>
                                <br />
                                Strategies
                            </h3>
                            <div className="banner-text-container">
                                <h4 className='banner-text' style={{ fontWeight: '400' }}>
                                    <strong className='banner-text' style={{ fontWeight: '800' }}>Invertí </strong>
                                    con Inteligencia
                                </h4>
                                <h4 className='banner-text' style={{ fontWeight: '400' }}>
                                    <strong className='banner-text' style={{ fontWeight: '800' }}>Operá </strong>
                                    con Estrategia
                                </h4>
                            </div>
                            <Link to="/Contact">
                                <button className='blue-button'>CONSULTANOS</button>
                            </Link>

                        </div>
                        <img className='banner-bg' src={bannerBg1} alt="" />
                        <img className='lineal-vector' src={backLabVector1} alt="" />
                    </div>
                </div>
                <Security />
            </section >
        </div >
    );
};

export default Home;