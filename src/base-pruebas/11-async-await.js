

export const getImagen = async() => {

    try {

        const apiKey = 'rIU9m9iNSwyvuiG8SF5V6FMjdhh4Dx9n';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

        

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontrĂ³ la imagen';
    }
    
    
    
}

 getImagen();



