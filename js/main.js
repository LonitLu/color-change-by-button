const colors = ["#FF0000", "#FF1493", "#2E8B57", "#87CEEB"];
const page = document.getElementById("container");
const btn = document.getElementById("btn");

colorResp = () => {
  const randomColors = Math.floor(Math.random() * colors.length);
  page.style.backgroundColor = colors[randomColors];
  console.log(randomColors);
};

btn.addEventListener("click", colorResp);
