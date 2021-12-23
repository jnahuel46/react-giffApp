import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {

        setCategories( [...categories, 'Naruto'] );//para añadir un elemento al array, renderisa todas las categorias del array y le añade otra
        setCategories(cats => [...cats, 'Naruto]);
    };*/


    return (
        <>
            <h2> GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    categories.map(category => 
                    <GifGrid 
                    key= { category }
                    category={ category } 
                    />
                    )
                }
            </ol>

        </>

    );



};


export default GifExpertApp;