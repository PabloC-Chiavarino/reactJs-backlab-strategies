import { faqData } from "../../constants/data"
import './styles.css'

const Faq = () => {

    return (
        <div className='faq-container'>
            <div className="faq-title-container" >
                <h2>Preguntas Frecuentes</h2>
            </div >
            {faqData.map((data) => {
                return (
                    <div key={data.id} className='question-container'>
                        <div>
                            <details>
                                {data.answer}
                                <summary>
                                    {data.question}
                                </summary>
                            </details>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Faq