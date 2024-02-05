// propiedades.js

// Arreglo de propiedades en venta
const venta = [
    {
      nombre: 'Casa en La Serena',
      src: "./assets/imgs/Casa1.png",
      descripcion: 'Hermosa casa en la mejor ubicación de La Serena',
      ubicacion: 'La Serena, Chile',
      habitaciones: 3,
      costo: 165.295,
      smoke: false,
      pets: true
    },

    {
        nombre: 'Casa Serena Oriente',
        src: "./assets/imgs/Casa2.png",
        descripcion: 'Hermosa casa en La Serena',
        ubicacion: 'La Serena, Chile',
        habitaciones: 4,
        costo: 228394,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Departamento Viña del Mar',
        src: "./assets/imgs/dpto_viña.png",
        descripcion: 'Hermoso departamento en la ciudad de Viña de Mar',
        ubicacion: 'Viña del Mar, Región de Valparaíso, Chile',
        habitaciones: 3,
        costo: 220000,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Departamento Ñuñoa',
        src: "./assets/imgs/RM.png",
        descripcion: 'Excelente departamento en la comuna de Ñuñoa',
        ubicacion: 'Ñuñoa, Región Metropolitana, Santiago, Chile',
        habitaciones: 2,
        costo: 150000,
        smoke: true,
        pets: false
      },
    // ... (otras propiedades en venta)
];

// Arreglo de propiedades en alquiler
const alquiler = [
    {
      nombre: 'Hermosa casa en Arriendo sector el Rosario de Peñuelas',
      src: "./assets/imgs/arriendo1.png",
      descripcion: 'Casa Amoblada En Condominio El Santuario - Peñuelas Coquimbo',
      ubicacion: 'Coquimbo, Chile',
      habitaciones: 5,
      costo: 2000000,
      smoke: true,
      pets: false
    },

    {
        nombre: 'Lujosa casa en El Rosario',
        src: "./assets/imgs/arriendo2.png",
        descripcion: 'Hermosa Casa De Dos Pisos En Sector Santuario De Peñuelas',
        ubicacion: 'Coquimbo, Chile',
        habitaciones: 4,
        costo: 1500000,
        smoke: true,
        pets: false
      },
      {
        nombre: 'Hermosa casa en San Joaquín La Serena',
        src: "./assets/imgs/arriendo3.png",
        descripcion: 'Casa En Arriendo San Joaquín 4 Dorm. 3 Baños La Serena',
        ubicacion: 'La Serena, Chile',
        habitaciones: 4,
        costo: 980000,
        smoke: true,
        pets: false
      },
      {
        nombre: 'Hermosa casa en El Milagro',
        src: "./assets/imgs/arriendo4.png",
        descripcion: 'Arriendo Casa Sector El Milagro Ulriksen La Serena',
        ubicacion: 'La Serena, Chile',
        habitaciones: 3,
        costo: 1600000,
        smoke: true,
        pets: false
      },
    // ... (otras propiedades en alquiler)
];

// Función para renderizar propiedades
function renderizarPropiedades(propiedades, contenedor) {
  // Verifica si el contenedor existe antes de continuar
  if (!contenedor) {
    console.error("El contenedor no se encontró en el DOM.");
    return;
  }

  // Limpia el contenido existente en el contenedor
  contenedor.innerHTML = '';

  // Utiliza un ciclo for para recorrer las propiedades y renderizarlas
  for (let i = 0; i < propiedades.length; i++) {
    const propiedad = propiedades[i];

    const propiedadHTML = `
      <div class="propiedad">
        <h3>${propiedad.nombre}</h3>
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <p>${propiedad.descripcion}</p>
        <p>Ubicación: ${propiedad.ubicacion}</p>
        <p>Habitaciones: ${propiedad.habitaciones}</p>
        <p>Costo: $${propiedad.costo}</p>
        <p>${propiedad.smoke ? 'Prohibido fumar' : 'Permitido fumar'}</p>
        <p>${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
      </div>
    `;

    // Agrega la propiedad al contenedor
    contenedor.innerHTML += propiedadHTML;
  }
}

// Llama a la función para renderizar las propiedades en las páginas HTML
const contenedorVenta = document.getElementById('propiedades-venta');

const contenedorAlquiler = document.getElementById('propiedades-alquiler');


renderizarPropiedades(venta, contenedorVenta);
renderizarPropiedades(alquiler, contenedorAlquiler);
