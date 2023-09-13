const StatisticsMath = {};

StatisticsMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
};

StatisticsMath.esImpar = function esImpar(lista) {
  return lista.length % 2;
};

StatisticsMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  return moda;
};

StatisticsMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = StatisticsMath.ordenarLista(listaDesordenada);
  const listaEsPar = StatisticsMath.esPar(lista);
  if (listaEsPar) {
    const mitad1ListaPar = lista.length / 2 - 1;
    const mitad2ListaPar = lista.length / 2;

    const listaMitades = [];
    listaMitades.push(lista[mitad1ListaPar]);
    listaMitades.push(lista[mitad2ListaPar]);

    const medianaListaPar = StatisticsMath.calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
};

StatisticsMath.calcularPromedio = function calcularPromedio(lista) {
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }
  const sumaLista = lista.reduce(sumarTodosElementos);
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
};

StatisticsMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordernarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }
  const lista = listaDesordenada.sort(ordernarListaSort);
  return lista;
};

StatisticsMath.ordenarListaBidimensional = function ordenarListaBidimensional(
  listaDesordenada,
  i
) {
  function ordernarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  const lista = listaDesordenada.sort(ordernarListaSort);
  return lista;
};
