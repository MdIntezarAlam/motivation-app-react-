import { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/motivation.css'


const Motivation = () => {

    const [textValue, setTextValue] = useState({})
    const [click, setClick] = useState(textValue)
    const rndm = Math.floor(Math.random() * 10)


    const motivationApi = async () => {
        const api = "https://type.fit/api/quotes"

        // console.log(rndm)

        try {
            const responce = await axios.get(api)
            // console.log(responce.data[rndm].author)
            setTextValue(responce.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        motivationApi()
    }, [])


    return (
        <div className='container_'>
            <div className='container__'>
                <a href="https://www.instagram.com/mdintezar123/" className='insta'>
                    <i className='fa-brands fa-instagram insta'></i>
                </a>
                <div className='constainer_cins'>
                    <i className='fa-solid fa-quote-left iconss'></i>
                    <i className='fa-sharp fa-solid fa-quote-right iconss'></i>
                </div>
                <div className='container___'>{textValue[rndm]?.text} </div>
                <span className="autho">{textValue[rndm]?.author}</span>
                <button onClick={() => setClick(click+1)}>Click New Motivation
                    <i className="fa-sharp fa-solid fa-greater-than iconssss"></i>
                </button>
            </div>
        </div >
    )
}

export default Motivation