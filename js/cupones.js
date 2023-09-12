const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioDescuento);

// const arrayUObjeto = undefined;
const couponsObj = {
  "soy spiderman": 30,
  me_gusta_el_pan: 25,
  batman_es_racista: 50,
};

function calcularPrecioDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = "Llena el formulario o EXPLOTO";
    return;
  }

  let discount;

  if (couponsObj[coupon]) {
    discount = couponsObj[coupon];
  } else {
    pResult.innerText =
      "El cupón no es válido o no aplica en tu(s) producto(s)";
    return;
  }

  // switch (coupon) {
  //   case "cupon spiderman":
  //     discount = 30;
  //     break;
  //   case "me_gusta_el_pan":
  //     discount = 25;
  //     break;
  //   default:
  //     pResult.innerText =
  //       "El cupón no es válido o no aplica en tu(s) producto(s)";
  //     return;
  // }

  //   if (coupon == "cupon spiderman") {
  //     discount = 30;
  //   } else if (coupon == "me_gusta_el_pan") {
  //     discount = 25;
  //   } else {
  //     pResult.innerText =
  //       "El cupón no es válido o no aplica en tu(s) producto(s)";
  //     return;
  //   }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}
