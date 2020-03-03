import React from 'react'
import "./country.css"


const Country = props =>
<div className="country-slider">
{props.slider.map((el)=>(
    <div className="country">
    
        <a href={el.link} className="country-link">
            <figure className="country-img">
                <img src={el.img}/>
            </figure>
            <div className="country-footer">
                         {el.country}
                <span className="btn-small">{el.see}</span>
            </div>
        </a>

    </div>
    ))}
    </div>


export default Country;