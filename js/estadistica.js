function esPar(lista) {
  //   if (lista.length % 2) {
  //     return false;
  //   } else {
  //     returntrue;
  //   }
  // Funciona igual que el return
  return !(lista.length % 2);
}

function esImpar(lista) {
  return lista.length % 2;
}

function calcularModa(lista) {
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
  // console.log({
  //   listaCount,
  //   listaArray,
  //   listaOrdenada,
  //   listaMaxNumber,
  // });
  // console.log(
  //   "La moda es: " +
  //     listaMaxNumber[0] +
  //     " y se repitio: " +
  //     listaMaxNumber[1] +
  //     " veces"
  // );
  const moda = listaMaxNumber[0];
  return moda;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    // const indexMitad1ListaPar = lista.length / 2 - 1;
    // const indexMitad2ListaPar = lista.length / 2;

    const mitad1ListaPar = lista[lista.length / 2 - 1];
    const mitad2ListaPar = lista[lista.length / 2];

    // const listaMitades = [
    //   lista[indexMitad1ListaPar],
    //   lista[indexMitad2ListaPar],
    // ];

    const listaMitades = [mitad1ListaPar, mitad2ListaPar];
    calcularPromedio(listaMitades);
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
  //   let sumaLista = 0;
  //   for (let i = 0; i < lista.length; i++) {
  //     sumaLista = sumaLista + lista[i];
  //   }

  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}

function ordenarLista(listaDesordenada) {
  function ordernarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if (valorAcumulado == nuevoValor) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }
    return valorAcumulado - nuevoValor;
  }
  const lista = listaDesordenada.sort(ordernarListaSort);
  return lista;
}

function ordenarListaBidimensional(listaDesordenada, i) {
  function ordernarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  const lista = listaDesordenada.sort(ordernarListaSort);
  return lista;
}
