import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp"; 


describe('Pruebas en <FirstApp />', () => {

    // // test('debe hacer match con el snapshop', () => {

    // //     const title = 'Hola soy Gokú';       
    // //      const { container } = render( <FirstApp title={ title } />)

    // //      expect ( container ).toMatchSnapshot();        
      
    // });

    test('Debe mostrar  el título en un h1', () => {

        const title = 'Hola soy Gokú';       
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } />)

         expect( getByText(title)).toBeTruthy();

        //  const h1 = container.querySelector('h1');
        //  expect(h1.innerHTML).toContain( title )

        expect(getByTestId('test-title').innerHTML ).toBe( title )
    });
      
    test('Debe mostrar el subtitulo enviado por  props', () => {

        const title = 'Hola soy Gokú';   
        const subTitle = 'Soy un subtitulo';    
        const { getByText } = render( 
        <FirstApp
            title={ title }
            subTitle={ subTitle }
            />
            );
            
        expect( getByText( subTitle ) ).toBeTruthy();
      
        });  

    });
    
    


  
