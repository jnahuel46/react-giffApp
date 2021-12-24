import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GifGridItem from '../../components/GifGridItem';



describe('Pruebas en GifGridItem', () => {

    const title = 'titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);//lo puse arriba para no repetir codigo en todos los tests

    test('Debe mostrar el componente correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de tener los atributos de la img ', () => {

        const img = wrapper.find('img');
        //console.log(img.html());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('Debe de tener animate__bounceInLeft ', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__bounceInLeft')).toBe( true );
        
    })
    



})
