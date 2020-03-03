import React from 'react'
import logo from "./logo-default-group-en.svg"
import "./navmenu.css"



const Navmenu = props =>
<div className="header">
        
        <div className="logo">
        <a href="/"><img id="logo" src={logo} alt="Logo-DocPlanner-group" /></a>
        </div>
      <div className="nav">
         
          <ul className="nav-menu">
    {      props.menu.map((el,i)=>(
        <>  
                <li className="dropdown"> 
                <a id={el.id || "a1"} href={el.link}>{el.title}</a>
                    <div className="dropdown-content">
                        <ul>
                        
                        {!el.drop ? null :
                     el.drop.map((el,i)=>  (
                            
                               <li><a  id="a2" href={el.link}>{el.drop}</a></li>
                            
                            ))}
                           
                        </ul>
                        </div>
                    
                            
                </li>
                </>
                ))}
            </ul>
  
  </div>
  

 
</div>
export default Navmenu;