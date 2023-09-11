const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioDescuento);

function calcularPrecioDescuento() {
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  if (!price || !discount) {
    pResult.innerText = "Llena el formulario o EXPLOTO";
    return;
  }

  if (discount > 100) {
    pResult.innerText = "No puedes ingresar un valor mayor a 100 :o";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}
