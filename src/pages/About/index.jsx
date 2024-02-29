import { teamWork, team1, team2 } from '../../assets/img'
import './styles.css'

const About = () => {
    return (
        <>
            <section style={{paddingTop: '4%'}}>
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
                    <div className='team' style={{ right: '6rem' }}>
                        <img src={team1} alt="" />
                        <div className='team-data'>
                            <h3 className='team-name'>Nombre del integrante</h3>
                            <h6>ROL</h6>
                            <p className='team-detail' >
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                            </p>
                        </div>
                    </div>
                    <div className='team' style={{ left: '6rem' }}>
                        <img src={team2} alt="" />
                        <div className='team-data'>
                            <h3 className='team-name'>Nombre del integrante</h3>
                            <h6>ROL</h6>
                            <p className='team-detail' >
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                                Lorem Impsum Lorem Impsum Lorem Impsum
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About