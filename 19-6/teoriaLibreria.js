// Toastify({
//   text: "Bienvenido al CFP n° 41",
//   duration: 2800,
//   destination: "https://www.youtube.com/?app=desktop&hl=es",
//   newWindow: false,
//   close: false,
//   gravity: "bottom", // `top` or `bottom`
//   position: "center", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "linear-gradient(to right, #00b026, #c9423d)",
//     color: "black"
//   },
//   onClick: function(){} // Callback after click
// }).showToast();

// Swal.fire({
//   title: 'Hola buenas noches :D',
//   text: 'Presiona para entrar a nuestro sitio',
//   icon: 'info',
//   confirmButtonText: 'Continuar'
// })

//Luxon libreria de tiempo/calendario/fechas

//asignación donde capturo todo lo del luxon en la variable DateTime(es el nombre que sugiere la documentación, pueden ponerle OTRO, PERO NO LOHAGAN)
let DateTime = luxon.DateTime

console.log(DateTime)
//asigne a una variable con el método now fecha y hora
let ahora = DateTime.now()
console.log(ahora)
console.log(ahora.month)
console.log(ahora.monthLong)
console.log(ahora.daysInMonth)

console.log(ahora.toLocaleString(DateTime.DATE_SHORT))
console.log(ahora.toLocaleString(DateTime.DATETIME_MED))
console.log(ahora.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS))

let cumple = DateTime.fromISO("1993-07-19T21:15:00")  
console.log(cumple)

console.log(cumple.toLocaleString({weekday:"long"}))
console.log(ahora.toLocaleString(DateTime.TIME_24_WITH_SECONDS))
console.log(cumple.toFormat("D"))

var end = DateTime.fromISO('2026-06-12');

let diffInMonths = end.diff(cumple, 'months');
console.log(diffInMonths.as('months'))

//hecho un reloj
setInterval(function(){
  ahora = DateTime.now()
  console.log(ahora.toLocaleString(DateTime.TIME_24_WITH_SECONDS))
},1000)
console.log(ahora)
