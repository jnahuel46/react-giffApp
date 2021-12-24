import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = ( {title, url} ) => {


    console.log(title, url );

    return (
        <div className="animate__animated animate__bounceInLeft">
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = { 
    title: PropTypes.string.isRequired
};

GifGridItem.propTypes = { 
    url: PropTypes.string.isRequired
};


export default GifGridItem;