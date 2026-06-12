let btnModoOscuro = document.getElementById("btnModoOscuro");

let dark = JSON.parse(localStorage.getItem("dark"));
if (dark === null) {
  dark = false;
}
if(dark){
  document.body.classList.toggle("modoOscuro");
  btnModoOscuro.innerText = "Light";
}

btnModoOscuro.onclick = () => {
  dark = !dark;
  localStorage.setItem("dark", dark);
  document.body.classList.toggle("modoOscuro");
  if (dark) {
    btnModoOscuro.innerText = "Light";
    return;
  }
  btnModoOscuro.innerText = "Dark";
};
