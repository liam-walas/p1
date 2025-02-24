 // Seleccionamos el botón hamburguesa y el menú
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.navbar nav');

 // Agregamos un evento de clic al botón hamburguesa
 hamburger.addEventListener('click', () => {
   navMenu.classList.toggle('active'); // Alternamos la clase 'active' en el menú
 });