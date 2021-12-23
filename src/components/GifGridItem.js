import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {


    console.log( id, title, url );

    return (
        <div className="animate__animated animate__bounceInLeft">
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
        </div>
    )
}
