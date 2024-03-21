import { useState, useEffect, useRef } from 'react'
import { objectivesBg } from '../../assets/img'
import './styles.css'

const Objectives = () => {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const backgroundRef = useRef()
    const spanRef = useRef()

    useEffect(() => {
        
        const elements = [
            backgroundRef.current,
            spanRef.current
        ]

        const callback = (entries) => {
            entries.forEach(entry => setIsIntersecting(entry.isIntersecting))
        }

        const observer = new IntersectionObserver(callback)

        if (elements) {
            elements.forEach((target) => {
                observer.observe(target)
            })
        }

        return () => observer.disconnect()

    }, [])

    return (
        <div className='section-objectivos'>
            <img
                className={isIntersecting ? 'objectives-bg animateGrow' : 'objectives-bg'}
                ref={backgroundRef}
                src={objectivesBg}
                alt=""
            />
            <div className="title-info-container">
                <h1 className='title-object'>¡Nos <br />
                    adaptamos a <br />
                    tus objetivos!</h1>
                <p className='p-object'>
                    Si hay parámetros y estrategias específicas que le gustaría ajustar para su backtesting...
                    <br />
                    <span
                        ref={spanRef}
                        className={isIntersecting ? 'span-object animateFade' : 'span-object'}
                    >¡NO DUDE EN CONSULTARNOS!
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Objectives