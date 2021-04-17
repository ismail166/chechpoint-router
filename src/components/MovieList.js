import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({Card}) => {
    return (
        <div>
            {
                Card.map((user,i) => {
                    return(
                         
                        <MovieCard
                        key={i}
                        id={Card[i].id}
                        title={Card[i].title}
                        img_src={Card[i].img_src}
                        src={Card[i].src}
                        rate={Card[i].rate}
                        />
                       
                    )
                })


            }
        </div>
    )
}

export default MovieList
