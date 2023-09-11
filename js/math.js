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

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  baseTriangulo,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd("Triangulo");
