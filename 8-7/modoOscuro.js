const btnModoOscuro = document.getElementById("btnModoOscuro");
const themeKey = "theme-preferido";

function aplicarTema(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-theme", isDark);
  document.documentElement.setAttribute(
    "data-bs-theme",
    isDark ? "dark" : "light"
  );

  if (btnModoOscuro) {
    btnModoOscuro.textContent = isDark ? "Light" : "Dark";
  }

  localStorage.setItem(themeKey, theme);
}

function inicializarTema() {
  const temaGuardado = localStorage.getItem(themeKey);
  const temaInicial = temaGuardado || "light";
  aplicarTema(temaInicial);
}

if (btnModoOscuro) {
  btnModoOscuro.addEventListener("click", () => {
    const temaActual = document.body.classList.contains("dark-theme") ? "dark" : "light";
    const nuevoTema = temaActual === "dark" ? "light" : "dark";
    aplicarTema(nuevoTema);
  });
}

inicializarTema();
