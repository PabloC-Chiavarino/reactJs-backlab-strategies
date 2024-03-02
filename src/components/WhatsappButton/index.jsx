import { whatsapp } from '../../assets/icons/index.js';
import './styles.css'

const WhatsAppButton = () => {
    return (
        <div className="whatsapp-button">
            <a href="https://wa.me/5492281300940" target="_blank" rel="noopener noreferrer">
                <img className='whatsapp-icon' src={whatsapp} alt="WhatsApp Icon"/>
            </a>
        </div>
    )
}

export default WhatsAppButton