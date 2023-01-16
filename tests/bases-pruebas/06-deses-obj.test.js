import { usContext } from "../../src/base-pruebas/06-deses-obj";



describe('Desestructuración objetos', () => {

    test ( 'Debe retornar un objeto',()=> {

        const testUsContext = { clave, nombre, edad, rango: 'Capitán' };
    })

    const user = testUsContext ();

    expect ( testUsContext).toEqual ( usContext);
  
});
