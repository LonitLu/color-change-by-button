const colors = ["#FF0000", "#FF1493", "#2E8B57", "#87CEEB", "#696969"];
const page = document.getElementById("container");
const btn = document.getElementById("btn");
const btnDel = document.getElementById("btn__none");

colorResp = () => {
  const randomColors = Math.floor(Math.random() * colors.length);
  page.style.backgroundColor = colors[randomColors];
  console.log(randomColors);
};

btn.addEventListener("click", colorResp);


btnNone = () => {
  btnDel.classList.add("btn__none");
  btn.classList.add("btn__none");
};

btnDel.addEventListener("click", btnNone);
