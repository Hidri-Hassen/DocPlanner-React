import React from 'react'
import "./team.css"

const Team = props =>(
<div class="team">{
props.team.map((el)=>(
        <p id="p-team"><h1 id="h-team">
           {el.title}
        </h1>
           {el.corps}
        </p>
))
}
</div>
    )

    export default Team;