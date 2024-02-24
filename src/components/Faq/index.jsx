import { faqData } from "../../constants/data"
import './styles.css'

const Faq = () => {

    return (
        <>
            <div className='faq-container'>
                <div className="faq-title-container" >
                    <h2>Preguntas Frecuentes</h2>
                </div >
                {faqData.map((data, index) => {
                    return (
                        <>
                            <div className='question-container'>
                                <details key={index}>{data.answer}
                                    <summary>
                                        {data.question}
                                    </summary>
                                </details>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Faq