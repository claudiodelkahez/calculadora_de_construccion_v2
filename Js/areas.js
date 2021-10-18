//Codigo de rectangulo

console.group("Rectángulos");

//const baseFigura = 5;
//const alturaFigura = 4;

//console.log("Los lados del cuadrado son: " + baseFigura + " y " + alturaFigura);

function perimetroFigura(base, altura) {
    return 2 * base + 2 * altura;
}
//console.log("El perimetro total es: " + perimetroFigura + "ml");


function areaFigura(base, altura) {
    return base * altura;
}

function volumenFigura(base, altura, profundidad) {
    return base * altura * profundidad;
}

// const areaFigura = baseFigura * alturaFigura;

//console.log("El área total es: " + areaFigura + " m^2");

console.groupEnd();

//Codigo de triangulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log
    ("Los lados del triángulo miden: "
        + ladoTriangulo1 + ", "
        + ladoTriangulo2 + " y "
        + baseTriangulo
    );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log(
    "El perimetro del triángulo es: "
    + perimetroTriangulo);

console.log(
    "La altura del triángulo es: "
    + alturaTriangulo
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
    "El area total es: "
    + areaTriangulo
    + "m^2"
);

console.groupEnd();

//Codigo del círculo

console.group("Círculos");


//Radio
const radioCirculo = 5;

console.log(
    "El radio del circulo es: "
    + radioCirculo
    + "m"
);

// Diametro

const diametroCirculo = radioCirculo * 2;

console.log(
    "El diametro del circulo es: "
    + diametroCirculo
    + "m"
);

// PI

const PI = Math.PI;

console.log(
    "Pi es: "
    + PI
);

//Circunferencia

const perimetroCiruclo = diametroCirculo * PI;

console.log(
    "El perimetro del circulo es: "
    + perimetroCiruclo
    + "m"
);

//Área

const areaCirculo = PI * (radioCirculo * radioCirculo);

console.log(
    "El area del circulo es: "
    + areaCirculo
    + "m^2"
);



console.groupEnd();




// Aqui interactuamos con html


function calcularPerimetro() {
    const input1 = document.getElementById("valor1");
    const value1 = input1.value;
    
    
    const input2 = document.getElementById("valor2");
    const value2 = input2.value;

    
    const perimetro = perimetroFigura(value1,value2);
    alert("El perimetro es " + perimetro + "m");
}

function calcularArea() {
    const input1 = document.getElementById("valor1");
    const value1 = input1.value;
    
    
    const input2 = document.getElementById("valor2");
    const value2 = input2.value;

    
    const area = areaFigura(value1,value2);
    alert("El area es " + area + "m²");
}





/* function calcularArea() {
    const input = document.getElementById("valor1");
    const value = input.value;
    
    const area = areaFigura(value1,value2);
    alert(area);
} */