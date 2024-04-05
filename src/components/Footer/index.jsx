import { Link } from 'react-router-dom';
import useLangContext from '../../hooks/useLangContext'
import { test, facebookFooter, instagramFooter, linkedinFooter, xFooter, arrowIco } from '../../assets/icons'
import './styles.css';

const Footer = () => {
    
    const { lang } = useLangContext();

    return (
        <section id='Home' className='section-footer'>
            <div className="contenedor">
                <div className="rectangulo gradient-border-footer">
                    <div className="contenido">
                        <img src={test} alt="icono regalo" className='icono-regalo' />
                        <h2 key={lang+15}>{lang === 'es' ? 'Prueba gratis' : 'Try for free'}</h2>
                        <p className="p-prueba" key={lang+16}>
                            {lang === 'es' ? 'Contáctate con nosotros para realizar una prueba gratis de nuestro servicio' : 'Contact us to get a free trial of our service'}
                        </p>
                        <Link to="/contact">
                            <button 
                                onClick={() => window.scrollTo(0, 0)}
                                data-text= { lang === 'es' ? 'Prueba Ahora!' : 'Try Now!' }
                                style={ lang === 'es' ? { paddingLeft: '10px' } : { paddingLeft: '0' } }
                                key={lang+17}>
                                    <img src={arrowIco} alt='' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="redes-sociales">
                <a href="https://www.facebook.com/profile.php?id=61555961936407" target='blank'><img src={facebookFooter} alt="facebook" /></a>
                <a href="https://www.instagram.com/backlab.strategies/" target='blank'><img src={instagramFooter} alt="instagram" /></a>
                <a href="https://www.linkedin.com/company/101579217/admin/feed/posts/?feedType=following" target='blank'><img src={linkedinFooter} alt="linkedin" /></a>
                <a className='x-vector' href="https://twitter.com/BacklabStr" target='blank'><img src={xFooter} alt="x" /></a>
            </div>
        </section>
    );
};

export default Footer;
