import { teamWork, team1, team2 } from '../../assets/img'
import './styles.css'

const About = () => {
    return (
        <>
            <section style={{ paddingTop: '4%' }}>
                <div className='title-container'>
                    <h2 className='title'>Acerca de nosotros</h2>
                </div>
                <div className="cards">
                    <div className="about-card gradient-border-about">
                        <h3 style={{ marginTop: '9%', fontSize: '1.5rem', fontWeight: '800' }}>Nuestra Misión</h3>
                        <p className='about-card-text'>
                            En Backlabs Strategies, nos dedicamos a redefinir
                            el mundo del trading al fusionar la potencia de la
                            personalización con la ciencia de las inversiones.<br />
                            Nuestra  misión es empoderar a cada inversor, sin importar su nivel de experiencia, brindándoles las herramientas
                            necesarias para tomar decisiones financieras
                            informadas y personalizadas.
                        </p>
                    </div>
                    <div className="about-card gradient-border-about">
                        <h3 style={{ marginTop: '9%', fontSize: '1.5rem', fontWeight: '800' }}>Nuestra Visión</h3>
                        <p className='about-card-text'>
                            En Backlabs Strategies, aspiramos a ser líderes
                            indiscutibles en el mundo del trading personalizado, donde
                            cada cliente encuentra la llave para desbloquear su máximo potencial financiero. Visualizamos un futuro donde la personalización no solo sea una opción, sino la norma, y
                            donde cada inversor se sienta capacitado para tomar el
                            control total de su éxito financiero.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="titleInfo-about-container">
                    <h2 className='title'>Nuestro equipo</h2>
                    <h4 className='info'>Conocé a nuestro equipo de expertos en trading</h4>
                </div>
                <img className='teamImg' src={teamWork} style={{ marginTop: '-30px', marginBottom: '-5px' }} alt="" />
                <div className='team-container'>
                    <div className='team' style={{ right: '4rem' }}>
                        <img src={team1} alt="" />
                        <div className='team-data'>
                            <h3 className='team-name'>Juan Casimiro</h3>
                            <h6>Desarrollador</h6>
                            <p className='team-detail' >
                                ¡Hola a todos! Soy Juan Casimiro, y entiendo los desafíos y preocupaciones que enfrentan los traders al tratar de navegar por los mercados financieros. Como trader autodidacta y desarrollador full stack, he dedicado mi carrera a crear soluciones tecnológicas que faciliten y mejoren la experiencia de trading. Como trader autodidacta durante más de cuatro años, conozco la importancia de contar con herramientas confiables y efectivas para tomar decisiones informadas en un mercado volátil.
                                <br />
                                <br />
                                Entiendo los miedos y las incertidumbres que pueden surgir al enfrentarse al mundo del trading, y estoy aquí para ofrecerte las herramientas y el apoyo que necesitas para tener éxito. Con un enfoque en la profesionalidad, la calidad y la transparencia, mi objetivo es proporcionarte soluciones personalizadas que se adapten a tus necesidades. Ya sea que estés buscando optimizar tus estrategias de trading o simplificar tus procesos de análisis, estoy aquí para ayudarte a alcanzar tus objetivos financieros.
                                <br />
                                <br />
                                ¡No estás solo en este viaje! Estoy aquí para ofrecerte apoyo y orientación en cada paso del camino.
                            </p>
                        </div>
                    </div>
                    <div className='team' style={{ left: '7.5rem' }}>
                        <img src={team2} alt="" />
                        <div className='team-data'>
                            <h3 className='team-name'>Ignacio Tolosa</h3>
                            <h6>Analista</h6>
                            <p className='team-detail' >
                                ¡Bienvenidos traders! Soy Ignacio Tolosa, desarrollador y analista de datos en BackLab. Entiendo perfectamente los desafíos que enfrentan los traders al operar en los mercados financieros y encontrar estrategias rentables. Como desarrollador y trader autodidacta, me he dedicado a crear soluciones tecnológicas que simplifiquen y mejoren el proceso de backtesting.
                                <br />
                                <br />
                                Durante mi carrera, he trabajado arduamente para desarrollar herramientas de backtesting confiables y efectivas que permitan a nuestros clientes tomar decisiones informadas en un mercado tan dinámico como el financiero. En mi papel como socio de BackLab, me comprometo a ofrecer soluciones personalizadas que se adapten a las necesidades específicas de nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About