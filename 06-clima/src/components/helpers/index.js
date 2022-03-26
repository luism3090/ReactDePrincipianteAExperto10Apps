export const validarBusquedaClima = (ciudad,pais) => {

    let validacion;
    if(ciudad.trim() === ""){
        validacion = {
            msjErrorValidaClima:'El campo ciudad es obligatorio',
            errorValidaClima: true
        }
    }
    else if(pais.trim() === ""){
        validacion = {
            msjErrorValidaClima:'El campo país es obligatorio',
            errorValidaClima: true
        }
    }
    else{
        validacion = {
            msjErrorValidaClima:'',
            errorValidaClima: false
        }
    }

    return validacion;

}

export const consultarApi = async(ciudad,pais) => {

    const apiKey = "ed4a030df21466c37921ff411a354425";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;

}