export const revisarPresupuesto = (presupuesto,presupuestoRestante) => {

    let classN = '';

    if(presupuestoRestante < parseInt(presupuesto) / 4){

        classN = "alert-danger";

    }
    else if(presupuestoRestante < parseInt(presupuesto) / 2 ){

        classN = "alert-warning";
    }
    else{
        classN = "alert-success";
    }

    return classN;

}