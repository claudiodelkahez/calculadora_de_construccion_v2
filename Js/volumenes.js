function volumenFigura(base, altura, profundidad) {
    return base * altura * profundidad;
}

function calcularVolumen() {
    const input1 = document.getElementById("volumen1");
    const value1 = input1.value;
    
    
    const input2 = document.getElementById("volumen2");
    const value2 = input2.value;

    const input3 = document.getElementById("volumen3");
    const value3 = input3.value;
    
    const volumen = volumenFigura(value1,value2,value3);
    alert("El volumen total es " + volumen + "m3");
}