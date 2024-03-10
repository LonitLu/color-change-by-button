const page = document.getElementById("container");
const btn = document.getElementById("btn");
const btnDel = document.getElementById("btn__none");
const colorData = document.getElementById("color__data");

colorRandomApi = () => {
  fetch(`https://www.thecolorapi.com/random?format=json`)
    .then((response) => response.json())
    .then((data) => {
      page.style.backgroundColor = data.rgb.value;

      document.getElementById("color__data").innerHTML = `
      Название цвета: ${data.name.value}<br> 
      RGB: ${data.rgb.value}<br> 
      HEX: ${data.hex.value}
      `;
    });
};

btn.addEventListener("click", colorRandomApi);

btnNone = () => {
  btnDel.classList.add("btn__none");
  btn.classList.add("btn__none");
  colorData.classList.add("btn__none");
};

btnDel.addEventListener("click", btnNone);
