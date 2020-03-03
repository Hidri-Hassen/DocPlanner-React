import React from 'react';

import Navmenu from "./components/navBar/navmenu.js"
import Intro from "./components/intro/intro.js"

import Boxes from "./components/deux-boxes/boxes.js"
import Brands from "./components/brands/brands.js"
import platform from "./Photo/Platform.jpg"
import Team from "./components/team/team.js"
import Country from "./components/countrySlider/country.js"
import Footer from "./components/footer/footer.js"
import {footer, label, text, box, svg, slider, team } from "../src/data"





function App() {
  return (
    <div className="App">

        <Navmenu menu={label} />
    
        <Intro paragraphe={text} />
    
        <Boxes boxdata={box} />

        <Brands svg={svg}/>

        <img src={platform} />
      
        <Team team={team} />

        <Country slider={slider} />
        
        <Footer footer={footer} />
      



    </div>
  )
}

export default App;
