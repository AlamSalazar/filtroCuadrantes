//Esta función filtra las coordenadas x,y que están en el primer y tercer
//cuadrante de un plano cartesiano.

function filtroCuad(A) {
    return A.filter(coord => (coord[0] > 0 && coord[1] > 0) || (coord[0] < 0 && coord[1] < 0));
}
console.log(filtroCuad([[-5,9],[-3,-2],[1,9],[2,-1]])); //Ejemplo