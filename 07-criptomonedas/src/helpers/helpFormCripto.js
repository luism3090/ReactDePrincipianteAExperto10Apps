import axios from "axios";

export const validaCriptomonedas = (moneda, criptomoneda) => {

    let estado;

    if(moneda === ""){
        estado = {
            errorCriptomonedas:true,
            msjErrorCriptomonedas:'El campo moneda es obligatorio'
        }
     }
     else if(criptomoneda === ""){
        estado = {
            errorCriptomonedas:true,
            msjErrorCriptomonedas:'El campo crptomoneda es obligatorio'
        }
     }else{
        estado = {
            errorCriptomonedas:false,
            msjErrorCriptomonedas:'No hay Error'
        }
     }

     return estado;

}

export const resultadoApiCriptoCotizacion = async (moneda,criptomoneda) => {

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    //const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const requestApi = await axios(url);

    return requestApi;

}