import { Link } from 'react-router-dom';
import useLangContext from '../../hooks/useLangContext'
import './styles.css'

const SlideMenu = () => {

    const { lang } = useLangContext();

    return (
        <div className="slide-menu">
            <ul className="slide-nav-links">
                <li key={lang + 0}>
                    <Link to="/">
                        {lang === 'es' ? 'Inicio' : 'Home'}
                    </Link>
                </li>
                <li
                    key={lang + 1}>
                    <Link to="/services">
                        {lang === 'es' ? 'Servicios' : 'Services'}
                    </Link>
                </li>
                <li
                    key={lang + 2}>
                    <Link to="/about">
                        {lang === 'es' ? 'Sobre Nosotros' : 'About Us'}
                    </Link>
                </li>
                <li
                    key={lang + 3}>
                    <Link to="/contact">
                        {lang === 'es' ? 'Contacto' : 'Contact Us'}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SlideMenu