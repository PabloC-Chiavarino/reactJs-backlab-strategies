import { servicesData, backtestingData, automationData } from '../../constants/data.js'
import { ParamsCards, Objetives, Stats, StatsCards } from '../../components/index.js'
import { servicesBanner1, servicesBanner2, bannerBg2, backLabVector2, backLabVectorRight } from '../../assets/img/index.js'
import { Link } from 'react-router-dom';
import './styles.css'

const Services = () => {

  return (
    <section className='section-services'>
      <article>
        <h1 className='title-services'>Nuestros Servicios</h1>
        <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>¡Conocé el plan que mejor se adapte a lo que necesitás!</span>
        <p style={{ marginTop: '3rem' }} className='p-services'>Te ofrecemos nuestros dos planes, Backtesting y Automatización de Estrategias.<br />
          Te invitamos a que leas cual es el que se adecua a tus necesidades.</p>
        <img style={{ marginTop: '8rem', boxShadow: '#a7a7a7 0px 5px 3px -1px', borderRadius: '10px' }} src={servicesBanner1} alt="" />
        <h2 className="subtitle-services">¿Cómo funciona el Backtesting?</h2>
        <div className="backtesting-container">

          {backtestingData.map((data, index) => {

            return (
              <div key={index} className='backtesting-info'>
                <h3 style={{ fontSize: '1rem', marginBottom: '5%' }}>{data.title}</h3>
                <span className='backtesting-description backtesting-main-description'>{data.mainDescription}</span>
                <span className='backtesting-description'>{data.description}</span>
              </div>
            )
          })}

        </div>
        <img style={{ marginTop: '11rem' }} src={servicesBanner2} alt="" />
      </article>
      <article>
        <h2 className="subtitle-services">¿Cómo funciona la automatización de Estrategia?</h2>
        <div className="backtesting-container">

          {automationData.map((data, index) => {

            return (
              <div key={index} className='backtesting-info'>
                <h3 style={{ fontSize: '1rem', marginBottom: '5%' }}>{data.title}</h3>
                <span className='backtesting-description'>{data.description}</span>
              </div>
            )
          })}

        </div>
        <div className="services-banner-container">
          <div className="services-banner-subcontainer">
            <h3 className='services-banner-text'>Potenciamos<br />tu Estrategia<br />de Trading</h3>
            <Link to="/Contact">
              <button className='green-button'>CONSULTANOS</button>
            </Link>
          </div>
          <img className='services-banner-bg' src={bannerBg2} alt="" />
          <img className='services-banner-vector' src={backLabVector2} alt="" />
          <img className='services-arrow-vector' src={backLabVectorRight} alt="" />
        </div>
      </article>
      <article>
        <h1 className='title-services' style={{ marginTop: '50%' }}>Parametrización para el Análisis</h1>
        <p className='p-services'>Reconocemos que <span>cada estrategia es única y que puede haber preferencias<br />
          individuales</span> en cuanto a los parámetros utilizados en el backtesting.</p>
        <span><h2 className="subtitle-services">Parámetros por Default</h2></span>
        <div className="services-container">

          {servicesData.map((data, index) => {

            return (
              <div key={index} className='service'>
                <h3 style={{ fontSize: '1rem' }}>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            )
          })}

        </div>
      </article>
      <ParamsCards />
      <Stats />
      <StatsCards />
      <Objetives />
    </section>
  )
}

export default Services