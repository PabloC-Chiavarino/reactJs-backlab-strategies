import { test, facebookFooter, instagramFooter, linkedinFooter, xFooter } from '../../assets/icons'
import './styles.css';

const Footer = () => {
    return (
        <section id='Home' className='section-footer'>
            <div className="contenedor">
                <div className="rectangulo gradient-border-footer">
                    <div className="contenido">
                        <img src={test} alt="icono regalo" className='icono-regalo' />
                        <h2>¡Prueba <br />Gratis!</h2>
                        <p className="p-prueba">Contáctate con nosotros para realizar <br />una prueba gratis de nuestro servicio</p>
                        <button>
                            <a href="#" target='blank'>¡Probar Ahora!</a>
                        </button>
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
