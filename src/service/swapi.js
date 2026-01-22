export const getListCharacter = async(seleccion) =>{
    try {

    const getDatalocalStorage = localStorage.getItem(seleccion);

    if (getDatalocalStorage) {
      console.log(`Usando cache para ${seleccion}`);
      return JSON.parse(getDatalocalStorage);
    }

    // const request = await fetch(`https://www.swapi.tech/api/${seleccion}/?expanded=true&page=*&limit=*`)  //me trae toda la data
    const request = await fetch(`https://www.swapi.tech/api/${seleccion}/?page=1&limit=10&expanded=true`)    //me trae solo 10 datos en una sola pagina
    if (!request.ok) {
        throw new Error("Error al obtener los datos");
    }
    const response = await request.json();
    localStorage.setItem(seleccion,JSON.stringify(response.results))
        
    return response.results  
    } catch (error) {
        console.error("Error en getListCharacter:", error);
        return [];
    }
}