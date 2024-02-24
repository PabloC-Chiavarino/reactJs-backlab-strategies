import { trading, numbers } from '../../assets/img';
import './styles.css';

const Customizable = () => {
    return (
        <div className='section-customizable'>
            <h1 className='title-customizable'>¡Parámetros Personalizables!</h1>
            <p className='subtitle-customizable'>
                Nos complace informarle que <span>nuestro servicio es altamente customizable, y<br />
                    estamos dispuestos a ajustar los parámetros según sus necesidades y especificaciones.</span>
            </p>
            <div className='customizable-container'>
                <div className='customizable-card'>
                    <img src={trading} alt='pantallas' />
                    <h3 className='customizable-card-title'>Agregar / Modificar Parámetros</h3>
                    <p className='customizable-card-text'>A los Parámetros Default se les puede<br/>
                        agregar o modificar cualquier otro parámetro<br/>
                        que sea necesario para la estrategia.</p>
                </div>
                <div className='customizable-card'>
                    <img src={numbers} alt='pantallas' />
                    <h3 className='customizable-card-title'>Indicador de Estrategia</h3>
                    <p className='customizable-card-text'>También está la posibilidad de usar<br/>
                        parámetros para cambiar la configuración de<br/>
                        un indicador de la estrategia.</p>
                </div>
            </div>
        </div>
    );
};

export default Customizable;
