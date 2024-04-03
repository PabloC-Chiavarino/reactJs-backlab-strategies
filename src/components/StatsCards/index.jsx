import { trading2, numbers2 } from '../../assets/img';
import '../ParamsCards/styles.css';
import './styles.css'


const StatsCards = ({ lang }) => {
    
    return (
        <div className='stats-cards-section' key={lang+24}>
            <h1 className='stats-subtitle'>
                { lang === 'es' ? '¡Estadísticas Personalizables!' : '¡Customizable Statistics!' }
            </h1>
            <p className='stats-text'>
                {lang === 'es' ? 'Nos complace informarle que ' : 'We are pleased to inform you that '} 
                <span>
                    { lang === 'es' ? 'posibilidad de personalizar las estadísticas según sus requerimientos individuales.' : 'possibility to customize the statistics according to their individual requirements.' }
                </span>
            </p>
            <div className='stats-cards-container' key={lang+25}>
                <div className='stat-card'>
                    <img src={numbers2} alt='pantallas' />
                    <h3 className='stat-card-title'>
                        { lang === 'es' ? '¡Pedinos tu tipo de estadística!' : '¡Ask us your type of statistics!' }
                    </h3>
                    <p className='stat-card-text'>
                        { lang === 'es' ? 'Si hay estadísticas específicas que le gustaría incluir en su informe de backtesting, no dude en informarnos' : 'If there are specific statistics that you like to include in your backtesting report, don\'t hesitate to inform us' }
                    </p>
                </div>
                <div className='stat-card'>
                    <img src={trading2} alt='pantallas' />
                    <h3 className='stat-card-title'>
                        { lang === 'es' ? 'Otras Estadísticas' : 'Other Statistics' }
                    </h3>
                    <p className='stat-card-text'>
                        { lang === 'es' ? 'Además de las estadísticas por default que te ofrecemos, tambien te proporcionamos otras estadísticas específicas' : 'As well as the default statistics we offer, we also provide other specific statistics' }
                    </p>

                </div>
            </div>
        </div>
    );
};

export default StatsCards;
