console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
  return {
    area: lado * lado,
    perimetro: lado * 4,
  };
}

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

console.groupEnd("Cuadrado");

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lados, base) {
  if (lados == base) {
    console.warn("Este no es un triángulo isósceles");
  } else {
    // Math.sqrt() = Es para calcular la raíz cuadrada en js
    return Math.sqrt(lados ** 2 - base ** 2 / 4);
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  baseTriangulo,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd("Triangulo");

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
// No se esta usando, la libreria math nos da un PI por defecto
const PI = 3.14159265;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = radioCirculo ** 2 * Math.PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);
  return {
    circunferencia: radio * 2 * Math.PI,
    area: radioAlCuadrado * Math.PI,
  };
}

console.groupEnd("Circulo");
