import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp"; 


describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola Soy Gokú';
    const subTitle = 'Hola Soy un subtítulo';


    test('debe hacer match con snapshop', () => {

        const { container } = render( <FirstApp title = { title }/> )
        expect( container ).toMatchSnapshot();


      
    });

    test('Debe mostrar el mensaje  "Hola soy Gokú', () => {

         render( <FirstApp title = { title }/> )         
        expect( screen.getByText( title ) ).toBeTruthy();
        // screen.debug();      
    });

    test('Debe mostrar el título en h1', () => {
        render( <FirstApp title = { title }/> ) 
        expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain( title );    
      
    });

    test('Debe mostrar el subtítulo enviado en props', () => {
        render(
             <FirstApp
             subTitle = { subTitle }
             />
              ) 
    expect( screen.getAllByText(subTitle).length ).toBe(2);         
      
    });     
    
  
    });
    
    


  
