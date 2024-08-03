import useLangContext from '../../hooks/useLangContext.jsx'
import { whatsapp } from '../../assets/icons/index.js'
import { ParamsCards, Objectives, Stats, StatsCards } from '../../components/index.js'
import {  backLabVector2, backLabVectorRight } from '../../assets/img/index.js'
import './styles.css'

const Services = () => {

  const { lang, langData } = useLangContext()

  return (
    <section className='section-services'>
      <article>
        <h1 className='title-services' key={lang}>
          {lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}
        </h1>
        <span style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem' }} key={lang+1}>
          {lang === 'es' ? '¡Conocé el plan que mejor se adapte a lo que necesitás!' : 'Know the plan that best fits your needs!'}
        </span>
        <p 
          style={{ marginTop: '3rem' }}
          className='p-services'
          key={lang+2}
          >
          { lang === 'es' ? 'Te ofrecemos nuestros dos planes, Backtesting y Automatización de Estrategias. Te invitamos a que leas cual es el que se adecua a tus necesidades.' : 'At our two plans, Backtesting and Automation Strategies. We are looking for the one that best fits your needs.' }
        </p>

        <div className='primary-banner-container' alt="" >
          <div className="primary-banner-text">
            <h3>Backtesting</h3>
            <h4 key={lang+3}>
              { lang === 'es' ? '¡Descubre el poder del backtesting para llevar tu trading al siguiente nivel!' : 'Discover the power of backtesting to take your trading to the next level!'}
            </h4>
            <p key={lang+4}>
              { lang === 'es' ? 'Prueba y optimiza tus estrategias antes de aplicarlas en el mercado real, asegurando un rendimiento óptimo y minimizando riesgos' : 'Test and optimize your strategies before applying them in the real market, ensuring an optimal performance and minimizing risks' }
            </p>
            <p key={lang+5}>
              { lang === 'es' ? 'Con datos históricos y análisis detallados, toma decisiones informadas y maximiza tu potencial de ganancias.' : 'With historical data and detailed analysis, take informed decisions and maximize your potential gain.' }
            </p>
          </div>
          <a
            className='primary-banner-button' 
            style={ lang === 'es' ? { width: '38rem' } : { width: '27rem' }} 
            href="https://wa.me/5492281300940" 
            target="_blank" 
            rel="noopener noreferrer"
            key={lang+6}
            data-text={ lang === 'es' ? '¡CONSULTANOS PARA CONOCER NUESTRAS OFERTAS!' : '¡ASK US TO KNOW OUR OFFERS!' }>
              <img src={whatsapp} alt="" />
          </a>
        </div>
        <h2 className="subtitle-services" key={lang+7}>
          { lang === 'es' ? '¿Cómo funciona el Backtesting?' : '¿How does backtesting work?'}
        </h2>
        <div className="backtesting-container">

          {langData['backtestingData']?.map((data) => {

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
            <h3 key={lang+7} style={{ color: '#6315ff' }}>
              { lang === 'es' ? 'Automatización de Estrategias' : 'Automation Strategies'}
            </h3>
            <h4 key={lang+8} style={{ color: '#333d60' }}>
              { lang === 'es' ? '¡Haz que tu trading sea más fácil y rentable hoy mismo!' : 'Make your trading more profitable and profitable today!'}
            </h4>
            <p key={lang+9} style={{ color: '#252b42' }}>
              { lang === 'es' ? 'Implementa estrategias previamente probadas y optimizadas con confianza, sabiendo que estás tomando decisiones informadas y eficientes en tiempo real.' : 'Implement strategies previously tested and optimized with confidence, knowing that you are taking informed decisions and efficient in real time.' }
            </p>
          </div>
          <a 
            className='primary-banner-button'
            style={ lang === 'es' ? { width: '38rem' } : { width: '27rem' }}
            href="https://wa.me/5492281300940"
            target="_blank"
            rel="noopener noreferrer"
            key={lang+7}
            data-text={ lang === 'es' ? '¡CONSULTANOS PARA CONOCER NUESTRAS OFERTAS!' : '¡ASK US TO KNOW OUR OFFERS!' }
          >
            <img src={whatsapp} key={lang+8} alt="" />
          </a>
        </div>
      </article>
      <article>
        <h2 className="subtitle-services" key={lang+10}>
          
          { lang === 'es' ? '¿Cómo funciona la automatización de estrategia?' : '¿How does automation strategy work?'}
        </h2>
        <div className="backtesting-container">

          {langData['automationData']?.map((data) => {

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
            <h3 className='secondary-banner-text' key={lang+11}>
              { lang === 'es' ? 'Potenciamos tu Estrategia de Trading' : 'We power your Trading Strategy'}
            </h3>
              <a
                style={ lang === 'es' ? { width: '15rem' } : { width: '11rem' }}
                className='secondary-banner-button'
                href="https://wa.me/5492281300940"
                target="_blank"
                rel="noopener noreferrer"
                data-text={ lang === 'es' ? 'CONSULTANOS' : 'ASK US' }
                key={lang+12}
                >
                <img src={whatsapp} alt="" />
              </a>
          </div>
          <img className='secondary-banner-vector' src={backLabVector2} alt="" />
          <img className='services-arrow-vector' src={backLabVectorRight} alt="" />
        </div>
      </article>
      <article>
        <h1
          className='title-services'
          style={{ marginTop: '25%' }}
          key={lang+13}
          >
          { lang === 'es' ? 'Parametrización para el Análisis' : 'Parameterization for Analysis'}
        </h1>
        <p className='p-services' key={lang+14}>
            { lang === 'es' ? 'Reconocemos que' : 'We recognize that' }
            <span>
              { lang === 'es' ? ' cada estrategia es única y que puede haber preferencias individuales' : ' each strategy is unique and that there may be individual' }
            </span>
            { lang === 'es' ? ' en cuanto a los parámetros utilizados en el backtesting' : ' regarding the parameters used in backtesting' }        
        </p>
        <span>
          <h2 className="subtitle-services" key={lang+15}>
            { lang === 'es' ? 'Parámetros por default' : 'Default parameters'}
          </h2>
        </span>
        <div className="services-container">

          {langData['servicesData']?.map((data) => {

            return (
              <div key={data.title} className='service'>
                <h3 style={{ fontSize: '1rem' }}>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            )
          })}

        </div>
      </article>
      <ParamsCards lang={lang} />
      <Stats lang={lang} statsData={langData['statsData']} />
      <StatsCards lang={lang} />
      <Objectives lang={lang} />
    </section>
  )
}

export default Services