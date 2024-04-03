import useLangContext from '../../hooks/useLangContext';
import './styles.css';

const Security = () => {

    const { lang, langData } = useLangContext()

    return (
        <section className='security-section'>
            <h1 className='security-title' key={lang+13}>
                <span>
                    {lang === 'es' ? 'Seguridad de datos ' : 'Data security '}
                </span>
                {lang === 'es' ? 'y de información del cliente' : 'and constumer information'}
            </h1>
            <p className='security-description' key={lang+14}>
                {lang === 'es' ? 'En BackLabs Strategies, la seguridad y privacidad de tu información son nuestra máxima prioridad. Queremos que tengas la tranquilidad de saber que tus datos están reguardados con los más altos estándares de seguridad de la industria financiera.' : 'At BackLabs Strategies, the security and privacy of your information are our priority. We want you to know that your data is protected with the highest industry standards of security.'}
            </p>
            {/* <p className='security-description' key={lang+15}>
                {lang === 'es' ? 'Queremos que tengas la tranquilidad de saber que tus datos están reguardados con los más altos estándares de seguridad de la industria financiera.' : 'We want you to know that your data is protected with the highest industry standards of security.'}
            </p> */}
            <div className="security-subcontainer">
                <div className='security-img-container security-img' alt="" />
                <div className="chars-container">
                    {langData['securityData']?.map((data) => {
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