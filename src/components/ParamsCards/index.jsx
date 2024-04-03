import { trading, numbers } from '../../assets/img';
import './styles.css';

const Customizable = ({ lang }) => {
    
    return (
        <div className='section-customizable'>
            <h1 className='title-customizable' key={lang+15}>
                {lang === 'es' ? '¡Parámetros Personalizables!' : '¡Customizable Parameters!'}
            </h1>
            <p className='subtitle-customizable' key={lang+16}>
                { lang === 'es' ? 'Nos complace informarle que ' : 'We are pleased to inform you that ' } 
                <span>
                    { lang === 'es' ?  'nuestro servicio es altamente personalizable, y estamos dispuestos a ajustar los parámetros según sus necesidades y especificaciones.' : 'our service is highly customizable, and we are ready to adjust the parameters according to your needs and specifications.' }
                </span>
            </p>
            <div className='customizable-container'>
                <div className='customizable-card'>
                    <img src={trading} alt='pantallas' />
                    <h3 className='customizable-card-title' key={lang+17}>
                        { lang === 'es' ? 'Agregar / Modificar Parámetros' : 'Add / Modify Parameters' }
                    </h3>
                    <p className='customizable-card-text' key={lang+18}>
                        { lang === 'es' ? 'A los Parámetros Default se les puede agregar o modificar cualquier otro parámetro que sea necesario para la estrategia.' : 'To the Parameters Default, you can add or modify any other parameter that is necessary for the strategy.' }
                    </p>
                </div>
                <div className='customizable-card'>
                    <img src={numbers} alt='pantallas' />
                    <h3 className='customizable-card-title' key={lang+19}>
                        { lang === 'es' ? 'Indicador de Estrategia' : 'Strategy Indicator' }
                    </h3>
                    <p className='customizable-card-text' key={lang+20}>
                        { lang === 'es' ? 'También está la posibilidad de usar parámetros para cambiar la configuración de un indicador de la estrategia.' : 'Additionally, you can use parameters to change the configuration of a strategy indicator.' }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Customizable;
