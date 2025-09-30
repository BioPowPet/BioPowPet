const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

document.querySelectorAll(".menubar a").forEach(link => {
  link.addEventListener("click", () => {
    // Solo cerrar si el menú está activo
    if (navbar.classList.contains("active")) {
      toggleNav();
    }
  });
});

document
  .getElementById("contactoForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtiene los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    // Número de WhatsApp de tu empresa (cambiar por el tuyo con código de país)
    let numero = "573001234567";

    // Construye el mensaje
    let texto = `Hola, soy ${nombre}.%0A📧 Email: ${email}%0A📞 Tel: ${telefono}%0A📝 Mensaje: ${mensaje}`;

    // Crea el enlace de WhatsApp
    let url = `https://wa.me/${numero}?text=${texto}`;

    // Redirige a WhatsApp
    window.open(url, "_blank");
  });
