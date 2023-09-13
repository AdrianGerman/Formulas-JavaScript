console.log(salarios);

function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });
  const medianaSalarios = StatisticsMath.calcularMediana(salarios);

  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }
  const medianaPorcentajesDeCrecimiento = StatisticsMath.calcularMediana(
    porcentajesCrecimiento
  );
  //   console.log({ porcentajesCrecimiento, medianaPorcentajesDeCrecimiento });

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesDeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  console.log({ nuevoSalario });
}

const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({ empresas });

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else if (!empresas[nombre][year]) {
    console.warn("La empresa no dio salarios ese año");
  } else {
    return StatisticsMath.calcularMediana(empresas[nombre][year]);
  }
}

function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else {
    const emopresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = emopresaYears.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });
    let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajesDeCrecimiento = StatisticsMath.calcularMediana(
      porcentajesCrecimiento
    );
    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesDeCrecimiento;
    const nuevoMediana = ultimaMediana + aumento;

    return nuevoMediana;
  }
}
