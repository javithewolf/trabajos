// Get modal elements
const modal = document.getElementById('movieModal')
const modalTitle = document.getElementById('movieTitle')
const modalDescription = document.getElementById('movieDescription')
const modalTrailer = document.getElementById('movieTrailer')
const closeModal = document.querySelector('.close')

// Function to open modal
function openModal(movie) {
 const title = movie.getAttribute('data-title')
 const description = movie.getAttribute('data-description')
 const trailer = movie.getAttribute('data-trailer')

 modalTitle.textContent = title
 modalDescription.textContent = description
 modalTrailer.href = trailer

 modal.style.display = 'flex'
}

// Close modal when "X" is clicked
closeModal.addEventListener('click', () => {
 modal.style.display = 'none'
})

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
 if (event.target === modal) {
  modal.style.display = 'none'
 }
})

// Add event listeners to each movie
document.querySelectorAll('.movie').forEach((movie) => {
 movie.addEventListener('click', () => {
  openModal(movie)
 })
})
document.addEventListener('DOMContentLoaded', function () {
 const links = document.querySelectorAll('nav a')
 const sections = document.querySelectorAll('.section')

 // Función para ocultar todas las secciones y mostrar solo la seleccionada
 function showSection(sectionId) {
  sections.forEach((section) => {
   if (section.id === sectionId) {
    section.style.display = 'block'
   } else {
    section.style.display = 'none'
   }
  })
 }

 // Agregar evento click a los enlaces del menú
 links.forEach((link) => {
  link.addEventListener('click', (event) => {
   event.preventDefault() // Evita el comportamiento predeterminado de los enlaces
   const sectionId = event.target.getAttribute('data-section')
   showSection(sectionId)
  })
 })

 // Mostrar la sección de inicio al cargar la página
 showSection('hero')
})