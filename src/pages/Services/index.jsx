import { servicesData, backtestingData, automationData } from '../../constants/data.js'
import { ParamsCards, Objetives, Stats, StatsCards } from '../../components/index.js'
import { bannerBg2, backLabVector2, backLabVectorRight } from '../../assets/img/index.js'
import './styles.css'

const Services = () => {

  return (
    <section className='section-services'>
      <article>
        <h1 className='title-services'>Nuestros Servicios</h1>
        <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>¡Conocé el plan que mejor se adapte a lo que necesitás!</span>
        <p style={{ marginTop: '3rem' }} className='p-services'>Te ofrecemos nuestros dos planes, Backtesting y Automatización de Estrategias.<br />
          Te invitamos a que leas cual es el que se adecua a tus necesidades.</p>

        <div className='primary-banner-container' alt="" >
          <div className="primary-banner-text">
            <h3>Backtesting</h3>
            <h4>
              ¡Descubre el poder del backtesting<br />
              para llevar tu trading al siguiente nivel!
            </h4>
            <p>Prueba y optimiza tus estrategias antes de<br />
              aplicarlas en el mercado real, asegurando un<br />
              rendimiento óptimo y minimizando riesgos
              <br />
              <br />
              Con datos históricos y análisis detallados,<br />
              toma decisiones informadas y maximiza<br />
              tu potencial de ganancias.</p>
          </div>
          <a className='primary-banner-button' href="https://wa.me/5492281300940" target="_blank" rel="noopener noreferrer">
            ¡CONSULTANOS PARA CONOCER NUESTRAS OFERTAS!
          </a>
        </div>
        <h2 className="subtitle-services">¿Cómo funciona el Backtesting?</h2>
        <div className="backtesting-container">

          {backtestingData.map((data) => {

            return (
              <div key={data.title} className='backtesting-info'>
                <h3 style={{ fontSize: '1rem', marginBottom: '5%' }}>{data.title}</h3>
                <span className='backtesting-description backtesting-main-description'>{data.mainDescription}</span>
                <span className='backtesting-description'>{data.description}</span>
              </div>
            )
          })}

        </div>

        <div className='automation-banner-container' alt="" >
          <div className="primary-banner-text">
            <h3 style={{ color: '#6315ff' }}>Automatización<br />de Estrategia</h3>
            <h4 style={{ color: '#333d60' }}>
              ¡Haz que tu trading sea más<br />
              fácil y rentable hoy mismo!
            </h4>
            <p style={{ color: '#252b42' }}>Implementa estrategias previamente<br />
              probadas y optimizadas con confianza,<br />
              sabiendo que estás tomando decisiones<br />
              informadas y eficientes en tiempo real. </p>
          </div>
          <a className='primary-banner-button' href="https://wa.me/5492281300940" target="_blank" rel="noopener noreferrer">
            ¡CONSULTANOS PARA CONOCER NUESTRAS OFERTAS!
          </a>
        </div>
      </article>
      <article>
        <h2 className="subtitle-services">¿Cómo funciona la automatización de Estrategia?</h2>
        <div className="backtesting-container">

          {automationData.map((data) => {

            return (
              <div key={data.title} className='backtesting-info'>
                <h3 style={{ fontSize: '1rem', marginBottom: '5%' }}>{data.title}</h3>
                <span className='backtesting-description'>{data.description}</span>
              </div>
            )
          })}

        </div>
        <div className="secondary-banner-container">
          <div className="secondary-banner-subcontainer">
            <h3 className='secondary-banner-text'>Potenciamos<br />tu Estrategia<br />de Trading</h3>
              <a
                className='secondary-banner-button'
                href="https://wa.me/5492281300940"
                target="_blank"
                rel="noopener noreferrer">
                CONSULTANOS
              </a>
          </div>
          <img className='secondary-banner-bg' src={bannerBg2} alt="" />
          <img className='secondary-banner-vector' src={backLabVector2} alt="" />
          <img className='services-arrow-vector' src={backLabVectorRight} alt="" />
        </div>
      </article>
      <article>
        <h1 className='title-services' style={{ marginTop: '50%' }}>Parametrización para el Análisis</h1>
        <p className='p-services'>Reconocemos que <span>cada estrategia es única y que puede haber preferencias<br />
          individuales</span> en cuanto a los parámetros utilizados en el backtesting.</p>
        <span><h2 className="subtitle-services">Parámetros por Default</h2></span>
        <div className="services-container">

          {servicesData.map((data) => {

            return (
              <div key={data.title} className='service'>
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