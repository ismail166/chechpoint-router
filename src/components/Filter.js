import React from 'react'




const Filter = ({searchfield, searchChange }) => {

    return (
        <div className='pa3'>
            <input className='ba b--black-20 pa3 tracked mb5 db center mt5 ' type='search' placeholder='Search Here...'
            
            onChange={searchChange}
              />
            
            
        </div>
    )
}

export default Filter
