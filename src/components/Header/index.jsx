import { Link } from 'react-router-dom';
import { brandLogo } from '../../assets/img';
import { twitter, facebook, instagram, linkedin, menu } from '../../assets/icons';
import './styles.css';

const Header = () => {
  return (
    <header>
      <nav>
        <input type="checkbox" name='' id='toggle' />
        <label htmlFor="toggle"><img src={menu} alt="menu desplegable" /></label>
        <div className="menu">
          <div className="logo">
            <span>
              <Link style={{ textDecoration: 'none', color: '#252b42' }} to="/">
                <img src={brandLogo} className='logo' />
              </Link>
            </span>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="social-icons">
            <a href="https://twitter.com/BacklabStr" target='blank'><img src={twitter} alt="twitter" /></a>
            <a href="https://www.facebook.com/profile.php?id=61555961936407" target='blank'><img src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/backlab.strategies/" target='blank'><img src={instagram} alt="instagram" /></a>
            <a href="https://www.linkedin.com/company/101579217/admin/feed/posts/?feedType=following" target='blank'><img src={linkedin} alt="linkedin" /></a>
          </div>
          <hr style={{width: '84.4%', position: 'absolute', marginTop: '95px'}} />
        </div>
      </nav>
    </header>
  );
};

export default Header;