import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories }) => {// recibo el setcategories como props



    const [inputValue, setInputValue] = useState('');

    const hanldeInputChange = ( e ) => {
        setInputValue( e.target.value);
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) { //trim para borrar los espacios en blanco
            setCategories(cats => [inputValue, ...cats]);// para registrar nuevo valor
            setInputValue('');//para volver al blanco en el input
        };

          
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text"
            value= { inputValue }
            onChange={ hanldeInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired
};
