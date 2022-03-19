export const validarCotizacion = (marca, year, plan) => {

    let cotizacion = {}

    if(marca===""){
        cotizacion = {
            errorCotizacion:true,
            msjErrorCotizacion:'La marca es oligatorio'
        }

        return cotizacion;
    }
    if(year===""){
        cotizacion = {
            errorCotizacion:true,
            msjErrorCotizacion:'El año es oligatorio'
        }
        return cotizacion;
    }
    if(plan===""){
        cotizacion = {
            errorCotizacion:true,
            msjErrorCotizacion:'El plan es oligatorio'
        }
        return cotizacion;
    }

    cotizacion = {
        errorCotizacion:false,
        msjErrorCotizacion:'Todo Ok'
    }

    return cotizacion;

}

export const obtenerDiferenciaYear = (year) => {

    return new Date().getFullYear() - year;

}

export const cacularMarca = (marca) => {

    let incremento;

    switch(marca){
        case 'europeo':
                incremento = 1.30;
            break;
            case 'americano':
                incremento = 1.15;
            break;
            case 'asiatico':
                incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;

}

export const obtenerPlan = (plan) => {
    return plan === 'basico' ? 1.20 : 1.50
}

export const primerMayuscula = (texto) => {    
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}

