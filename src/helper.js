//obtiene la diferencia de anos
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}
//calcula el total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            break;
        default:
            break;
        
    }
    return incremento;
}
//Calcula el tipo de seguo
export function obtenerPlan( plan ){
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primera letra mayuscula
export function primerMayuscula ( texto ){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}