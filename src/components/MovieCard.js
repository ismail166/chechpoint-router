import React from 'react'
import {Link} from 'react-router-dom'




const Movies = (props) => {
    return (
        
        
        <div className='container dib pa2 bw2'>
            <div className='overlay'>
              
              <h1 className="text">{props.title}</h1>
              <h1 className="rating">{props.rate}</h1>
            
            </div>   
            <Link to={`/movieoverview/${props.id}`}>         
              <img style={{width: "400px",height:"400px"}} className ='hover-shadow-5 ba grow  mw5' src={`./images/movie-${props.id}.jpg`} alt=''/>
            </Link>   
        </div>  
            
    )
}

export default Movies
