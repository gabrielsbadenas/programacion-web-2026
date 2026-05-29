// Código actualizado para usar la clase Carta en lugar de libros.
class Carta {
  constructor(id, elixir, nombre, nivel, rareza, imagen, stock = 20) {
    this.id = id;
    this.elixir = Number(elixir);
    this.nombre = nombre;
    this.nivel = Number(nivel);
    this.rareza = rareza;
    this.imagen = imagen;
    this.stock = Number(stock);
    this.cantidad = 1;
  }

  levelUp() {
    this.nivel++;
  }
  levelDown() {
    if (this.nivel > 1) {
      this.nivel--;
    }
  }
  actualizarStock() {
    const stockAct = Number(
      prompt("Ingrese la cantidad de stock que desea sumar"),
    );
    if (!isNaN(stockAct)) {
      this.stock = this.stock + stockAct;
    }
  }
  actualizarCantidad() {
    if (this.cantidad < this.stock) {
      this.cantidad++;
    }
  }
  reducirCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
}

let carrito = [];
let deck = [
];


let storedDeck = localStorage.getItem("deck")
if(storedDeck){
  bonelessDeck=JSON.parse(storedDeck)
  let newDeck=[]
  bonelessDeck.forEach(element => {
    let newCard = new Carta(element.id,element.elixir,element.nombre,element.nivel,element.rareza,element.imagen,element.stock)
    newDeck.push(newCard)
  });
  deck=newDeck
}else{
  deck.push(
  new Carta(1, 3, "princesa", 15, "legendaria", "princesa.png"),
  new Carta(2, 3, "caballero", 14, "comun", "caballero.png"),
  new Carta(3, 3, "goblin gang", 14, "comun", "gang.png"),
  new Carta(4, 3, "skeleton army", 14, "epica", "skeletons.png"),
  new Carta(5, 5, "inferno tower", 14, "rara", "tower.png"),
  new Carta(6, 6, "rocket", 14, "rara", "rocket.png"),
  new Carta(7, 3, "goblin barrel", 14, "epica", "barrel.png"),
  new Carta(8, 3, "arrows", 15, "comun", "arrows.png"));
  localStorage.setItem("deck",JSON.stringify(deck))
}
const containerCartas = document.getElementById("containerLibros");
const titulo = document.getElementById("tituloPrincipal");
const buscador = document.getElementById("buscador");
const selectOrden = document.getElementById("selectOrden");
const guardarCartaBtn = document.getElementById("guardarCartaBtn");
const formAgregarCarta = document.getElementById("formCargarCarta");
const modalBodyCarrito = document.getElementById("modalBodyCarrito");
const botonCarrito = document.getElementById("botonCarrito");

titulo.innerText = "Mis cartas 🙌";

function imprimirCatalogo(array) {
  containerCartas.innerHTML = "";

  array.forEach((carta) => {
    const cartaDiv = document.createElement("div");
    cartaDiv.className = "mx-auto my-2 col-12 col-md-6 col-lg-4 col-xl-3";
    cartaDiv.innerHTML = `
        <div id="${carta.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;" src="../img/${carta.imagen}" alt="${carta.nombre}">
            <div class="card-body">
                <h4 class="card-title">${carta.nombre}</h4>
                <p>Rareza: ${carta.rareza}</p>
                <p class="precio">Elixir: ${carta.elixir}</p>
                <p class="stock">Stock: ${carta.stock}</p>
                <button class="btn btn-success" id="btnAgregar${carta.id}" data-bs-toggle="tooltip" data-bs-placement="left">Agregar al carrito</button>
            </div>
        </div>`;

    containerCartas.append(cartaDiv);

    const btnAgregarCarrito = document.getElementById(`btnAgregar${carta.id}`);
    btnAgregarCarrito.addEventListener("click", () => {
      let cartaEnCarrito = buscarCartaPorID(carta.id, carrito);
      if (cartaEnCarrito === undefined) {
        carrito.push(carta);
        console.log(carrito);
        return;
      }
      cartaEnCarrito.actualizarCantidad();
    });
  });
}
function buscarCartaPorID(id, array) {
  const cartaEncontrada = array.find((carta) => carta.id === id);
  return cartaEncontrada;
}


function agregarCartaForm(array) {
  const nombreInput = document.getElementById("tituloInput");
  const rarezaInput = document.getElementById("rarezaInput");
  const nivelInput = document.getElementById("nivelInput");
  const stockInput = document.getElementById("stockInput");
  const elixirInput = document.getElementById("elixirInput");

  const cartaNueva = new Carta(
    array.length + 1,
    elixirInput.value,
    nombreInput.value,
    nivelInput.value,
    rarezaInput.value,
    "cartaNueva.png",
    stockInput.value,
  );

  array.push(cartaNueva);
  formAgregarCarta.reset();
}

function imprimirCarrito(array) {
  modalBodyCarrito.innerHTML = "";

  array.forEach((carta) => {
    modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id="cardCarrito${carta.id}" style="max-width: 540px;">
            <div class="card-body">
                <h4 class="card-title">${carta.nombre}</h4>
                <p class="card-text">Rareza: ${carta.rareza}</p>
                <p class="card-text">Elixir: ${carta.elixir}</p>
                <p class="card-text">Stock: ${carta.stock}</p>
                <p id="cantidad${carta.id}" class="card-text">Cantidad: ${carta.cantidad}</p>
                <p id="subtotal${carta.id}" class="card-text">Subtotal: ${carta.cantidad * carta.elixir} elixir</p>
                <button id="btn+1${carta.id}" class="btn btn-success">+1</button>
                <button id="btn-1${carta.id}" class="btn btn-danger">-1</button>
                <button class="btn btn-danger" id="btnEliminar${carta.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>`;
  });

  array.forEach((carta) => {
    const btnAgregarCarrito = document.getElementById(`btn+1${carta.id}`);
    btnAgregarCarrito.addEventListener("click", () => {
      carta.actualizarCantidad();
      document.getElementById(`cantidad${carta.id}`).innerHTML =
        `Cantidad: ${carta.cantidad}`;
      document.getElementById(`subtotal${carta.id}`).innerHTML =
        `Subtotal: ${carta.cantidad * carta.elixir} elixir`;
    });

    const btnQuitarCarrito = document.getElementById(`btn-1${carta.id}`);
    btnQuitarCarrito.addEventListener("click", () => {
      carta.reducirCantidad();
      document.getElementById(`cantidad${carta.id}`).innerHTML =
        `Cantidad: ${carta.cantidad}`;

      document.getElementById(`subtotal${carta.id}`).innerHTML =
        `Subtotal: ${carta.cantidad * carta.elixir} elixir`;
    });

    const btnEliminar = document.getElementById(`btnEliminar${carta.id}`);
    if (btnEliminar) {
      btnEliminar.onclick = function () {
        const card = document.getElementById(`cardCarrito${carta.id}`);
        if (card) card.remove();
        console.log("antes", carrito);
        borrarCarta(carta, carrito);
        console.log("despues", carrito);
      };
    }
  });
}

function borrarCarta(carta, array) {
  let index = carrito.indexOf(carta);
  array.splice(index, 1);
}
let resultadosFiltrados = deck;

imprimirCatalogo(resultadosFiltrados);

buscador.addEventListener("input", () => {
  const valor = buscador.value.trim();

  if (valor === "") {
    resultadosFiltrados = deck;
  } else {
    resultadosFiltrados = deck.filter(
      (elem) =>
        elem.nombre.toLowerCase().includes(valor.toLowerCase()) ||
        elem.rareza.toLowerCase().includes(valor.toLowerCase())
    );
  }

  if (resultadosFiltrados.length < 1) {
    console.log(`Para ${valor} no hay coincidencias`);
  }

  // Aplicar el ordenamiento actual a los resultados filtrados
  aplicarOrdenamiento(selectOrden.value, resultadosFiltrados);
});

function aplicarOrdenamiento(opcion, array) {
  switch (opcion) {
    case "0":
      imprimirCatalogo(array);
      break;
    case "1":
      const orden1 = array.toSorted((a, b) => b.elixir - a.elixir);
      imprimirCatalogo(orden1);
      break;
    case "2":
      const orden2 = array.toSorted((a, b) => a.elixir - b.elixir);
      imprimirCatalogo(orden2);
      break;
    case "3":
      const orden3 = array.toSorted((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );
      imprimirCatalogo(orden3);
      break;
    case "4":
      const orden4 = array.toSorted((a, b) =>
        b.nombre.localeCompare(a.nombre)
      );
      imprimirCatalogo(orden4);
      break;
  }
}

selectOrden.addEventListener("change", () => {
  aplicarOrdenamiento(selectOrden.value, resultadosFiltrados);
});

guardarCartaBtn.onclick = () => {
  agregarCartaForm(deck);
  imprimirCatalogo(deck);
};

botonCarrito.onclick = function () {
  imprimirCarrito(carrito);
};
