import { Link } from 'react-router-dom';
import useLangContext from '../../hooks/useLangContext'
import { OpacityDiv } from '../../components'
import './styles.css'

const SlideMenu = ({show, handleShowMenu}) => {

    const { lang } = useLangContext();

    return (
        <>
            <OpacityDiv handleOpacity={handleShowMenu} show={show} />
            <div 
                className="slide-menu"
                style={{ transform: show ? 'translate(0)' : 'translate(100%)' }}
            >
                <ul className="slide-nav-links">
                    <li 
                        key={lang + 0}
                        onClick={handleShowMenu}
                    >
                        <Link to="/">
                            {lang === 'es' ? 'Inicio' : 'Home'}
                        </Link>
                    </li>
                    <hr />
                    <li
                        key={lang + 1}
                        onClick={handleShowMenu}
                    >
                        <Link to="/services">
                            {lang === 'es' ? 'Servicios' : 'Services'}
                        </Link>
                    </li>
                    <hr />
                    <li
                        key={lang + 2}
                        onClick={handleShowMenu}
                    >
                        <Link to="/about">
                            {lang === 'es' ? 'Sobre Nosotros' : 'About Us'}
                        </Link>
                    </li>
                    <hr />
                    <li
                        key={lang + 3}
                        onClick={handleShowMenu}
                    >
                        <Link to="/contact">
                            {lang === 'es' ? 'Contacto' : 'Contact Us'}
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SlideMenu