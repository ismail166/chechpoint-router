import React from 'react'
import {Link} from 'react-router-dom'


const  MovieOverview =(props)=> {
    console.log(props)   

    return (
        <div>
            
            <img style={{width: "500px",height:"500px"}} className ='hover-shadow-5 ba  mw5' src={props.img_src} alt='' />
            <h1 className="">{props.title}</h1>
            <h1 className="rating">{props.rate}</h1>
            <h1 className="">{props.description}</h1>
            <Link className="white no-underline ttu tracked" to='/'>home</Link>

        </div>
    )
}

export default MovieOverview
