import React, { Fragment } from 'react'
import "./footer.css"


const Footer = props =>

<div className="footer-main">

     
        
            <p>We are leaders in 10 countries: 

            {props.footer.map(el=>
            
            <a href={el.link} target={el.target} >{el.text}</a>
            )
            }
            
            
           
             
            </p>
            
            <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
    
            www.docplanner.com © 2020
        
            
   

</div>



// {(el<el.length ) ? (<a href={el.link} target={el.target} >{el.text}</a>):
// <Fragment.React>
// (<span>and</span><a href={el.link} target={el.target} >{el.text}</a>)
// </Fragment.React>
// }


export default Footer;