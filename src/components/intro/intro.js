import React from 'react'
import "./intro.css"
import Icon from "./sygnet.png"





const Intro = props =>(
<div className="care">
    <img className="logoIntro" src={Icon} alt="Logo" />
        <h1>
          Making the healthcare experience more human
             </h1>
       <div className="text" >{
       props.paragraphe.map((el)=>(
            <div className="p">
            
                <p>{el.text}</p>
            
            </div>
            ))
        }
        </div>
</div>
)


export default Intro;