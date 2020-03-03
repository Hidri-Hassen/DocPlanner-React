import React from 'react'
import "./boxes.css"


const Boxes = props =>
<div className="box">
{props.boxdata.map((el,i)=>(
    <div className={el.className}>
            <h2>{el.title}</h2>
            <h1>{el.text}</h1>
            <div>  
                <div className="button">
                {!el.option ? null :
                    <select className="country">
                    {
                el.option.map((el,i)=> 
                   
                            <option value={el.link}>{el.country}</option>
                            )
                        }                                    
                    </select>
                   }

                    
                </div>

            </div>
              
           
<figure className="laptop2">
    <img src={el.image} />
</figure>


        </div>
       )
       
       
       )}
       </div>

   




export default Boxes;