import React from 'react'
import "./brands.css"


//section brand



const Brands = props =>

<div class="brands">

<React.Fragment>
<h1 id="text" > We are a global <br/> company <br/> with local culture </h1> 
{props.svg.map((el,i)=>
<ul class="brands-logos">
    

    <li>
        <a href={el.link} target={el.target}>
            <svg id={el.id} xmlns={el.xmlns} width={el.width} height={el.height}  viewBox={el.viewBox} >
                <path d={el.path} ></path>
            </svg>
        </a>
    </li>
  
</ul>
)
}
</React.Fragment>



</div>




export default Brands;