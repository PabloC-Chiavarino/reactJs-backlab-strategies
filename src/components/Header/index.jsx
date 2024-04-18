import { Link } from 'react-router-dom';
import useLangContext from '../../hooks/useLangContext';
import LangSwitcher from '../LangSwitcher';
import { brandLogo } from '../../assets/img';
import { twitter, facebook, instagram, linkedin } from '../../assets/icons';
import './styles.css';

const Header = () => {

  const { lang } = useLangContext();

  return (
    <header>
      <nav>
        <input type="checkbox" name='' id='toggle' />
        <div className="menu">
          <div className="logo">
            <span>
              <Link style={{ textDecoration: 'none', color: '#252b42' }} to="/">
                <img src={brandLogo} className='logo' alt='logo' />
              </Link>
            </span>
          </div>
          <ul className="nav-links">
            <li key={lang+0}>
              <Link to="/">
                {lang === 'es' ? 'Inicio' : 'Home'}
              </Link>
            </li>
            <li
             key={lang+1}>
              <Link to="/services">
                {lang === 'es' ? 'Servicios' : 'Services'}
              </Link>
            </li>
            <li
             key={lang+2}>
              <Link to="/about">
                {lang === 'es' ? 'Sobre Nosotros' : 'About Us'}
              </Link>
            </li>
            <li
             key={lang+3}>
              <Link to="/contact">
                {lang === 'es' ? 'Contacto' : 'Contact Us'}
              </Link>
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://twitter.com/BacklabStr" target='blank'><img src={twitter} alt="twitter" /></a>
            <a href="https://www.facebook.com/profile.php?id=61555961936407" target='blank'><img src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/backlab.strategies/" target='blank'><img src={instagram} alt="instagram" /></a>
            <a href="https://www.linkedin.com/company/101579217/admin/feed/posts/?feedType=following" target='blank'><img src={linkedin} alt="linkedin" /></a>
          </div>
        </div>
          <hr className="line" />
      </nav>
      <LangSwitcher />
    </header>
  );
};

export default Header;