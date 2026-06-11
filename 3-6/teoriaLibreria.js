let DateTime = luxon.DateTime
const now = DateTime.now()
console.log(now.monthLong)
console.log(now.toLocaleString(DateTime.DATE_SHORT))
let nacimiento = DateTime.fromISO("2001-06-11")
console.log(nacimiento.weekdayLong)
let hora = document.getElementById("reloj")
setInterval(function(){
  let ahora = DateTime.now()
  let formato = ahora.toLocaleString(DateTime.TIME_WITH_SECONDS) + ahora.toLocaleString({weekday:"long"})
  hora.innerHTML = formato
},1)
/*
Toastify({
  text: "Bienvenido al CFP n° 41",
  duration: 2800,
  destination: "https://www.youtube.com/?app=desktop&hl=es",
  newWindow: false,
  close: false,
  gravity: "bottom", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b026, #c9423d)",
    color: "black"
  },
  onClick: function(){} // Callback after click
}).showToast();

Swal.fire({
  title: 'Hola buenas noches :D',
  text: 'Presiona para entrar a nuestro sitio',
  icon: 'info',
  confirmButtonText: 'Continuar'
})
  */