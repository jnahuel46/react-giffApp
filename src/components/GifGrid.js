import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data, loading } = useFetchGifs( category );

    //getGifs();

    return (

        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <div >
                <ol>
                    {
                        data.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
