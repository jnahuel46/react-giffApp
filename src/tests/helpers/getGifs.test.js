import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs fetch', () => {

    test('Debe traer 10 elementos el arr ', async () => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe( 10 );

    })

    test('Si no manmdo category tiene que dar arr vacio ', async () => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    })
    
    
})
