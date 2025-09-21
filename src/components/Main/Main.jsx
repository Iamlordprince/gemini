import React from 'react'
import './Main.css'
const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-components">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today ?</p>
                </div>
                <div className="cards">
                    <p>Suggest beautifu</p>
                </div>
            </div>
        </div>
    )
}
export default Main