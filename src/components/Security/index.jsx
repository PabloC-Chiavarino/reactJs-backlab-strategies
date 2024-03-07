import { securityData } from '../../constants/data';
import './styles.css';

const Security = () => {

    return (
        <section className='security-section'>
            <h1 className='security-title'>
                <span>Seguridad de datos</span> y de información del cliente
            </h1>
            <p className='security-description'>
                En BackLabs Strategies, la seguridad y privacidad de tu información son nuestra máxima<br />
                prioridad. Queremos que tengas la tranquilidad de saber que tus datos están reguardados<br />
                con los más altos estándares de seguridad de la industria financiera.
            </p>
            <div className="security-subcontainer">
                <div className='security-img-container security-img' alt="" />
                <div className="chars-container">
                    {securityData.map((data) => {
                        return (
                            <div key={data.title} className="char">
                                <span className='char-title-container'>
                                    <div className='checkIcon' alt="" />
                                    <h4 className='char-title'>{data.title}</h4>
                                </span>
                                <p className='char-description'>{data.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Security;