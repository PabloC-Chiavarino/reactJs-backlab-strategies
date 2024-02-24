import { trading2, numbers2 } from '../../assets/img';
import '../ParamsCards/styles.css';
import './styles.css'


const StatsCards = () => {
    return (
        <div className='stats-cards-section'>
            <h1 className='stats-subtitle'>¡Estadísticas Personalizables!</h1>
            <p className='stats-text'>
                Nos complace informarle que <span>posibilidad de personalizar las<br />
                    estadísticas según sus requerimientos individuales.</span>
            </p>
            <div className='stats-cards-container'>
                <div className='stat-card'>
                    <img src={numbers2} alt='pantallas' />
                    <h3 className='stat-card-title'>¡ Pedinos tu tipo de estadística !</h3>
                    <p className='stat-card-text'>Si hay estadísticas específicas que le gustaría<br />
                        incluir en su informe de backtesting,<br />
                        no dude en informarnos</p>

                </div>
                <div className='stat-card'>
                    <img src={trading2} alt='pantallas' />
                    <h3 className='stat-card-title'>Otras Estadísticas</h3>
                    <p className='stat-card-text'>Además de las estadísticas por default que te<br/>
                        ofrecemos, tambien te proporcionamos otras<br/>
                        estadísticas específicas </p>

                </div>
            </div>
        </div>
    );
};

export default StatsCards;
