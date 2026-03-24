
var CATEGORIAS = [
  { id: "all", label: "Todos", emoji: "🏪" },
  { id: "perros", label: "Perros", emoji: "🐶" },
  { id: "gatos", label: "Gatos", emoji: "🐱" },
  { id: "dogourmet", label: "Dogourmet", emoji: "🍗" },
  { id: "accesorios", label: "Accesorios", emoji: "🎀" },
  { id: "higiene", label: "Higiene", emoji: "🛁" },
  { id: "mascotas", label: "Mascotas", emoji: "🐾" },
];

var EMOJIS_CATEGORIA = {
  perros: "🐕",
  gatos: "🐈",
  dogourmet: "🍖",
  accesorios: "🎀",
  higiene: "🧴",
  mascotas: "🐾",
};

var DESCRIPCIONES = [
  "Fórmula premium con proteínas de alta calidad para mantener a tu mascota activa y saludable.",
  "Diseñado especialmente para las necesidades nutricionales de razas pequeñas y medianas.",
  "Ingredientes naturales sin conservantes artificiales, con vitaminas y minerales esenciales.",
  "Sabor irresistible que tu mascota adorará desde el primer bocado.",
  "Contribuye al brillo del pelaje y fortalece el sistema inmunológico.",
  "Ideal para el crecimiento sano en etapas tempranas de vida.",
  "Mezcla balanceada de proteínas, carbohidratos y grasas saludables.",
  "Sin colorantes ni sabores artificiales, nutrición pura y natural.",
];

var PRODUCTOS_DB = [
  { id: 1, name: "Whiskas Atún Adultos (3kg)", category: "gatos", price: 54900, buyPrice: 45000 },
  { id: 2, name: "Pedigree Adultos Carne y Pollo (20kg)", category: "perros", price: 178000, buyPrice: 145000 },
  { id: 5, name: "Fancy Feast Clásico Salmón (85g x12)", category: "gatos", price: 48000, buyPrice: 38000 },
  { id: 6, name: "Snack Dogourmet Pollo Premium (500g)", category: "dogourmet", price: 32900, buyPrice: 24000 },
  { id: 7, name: "Collar Ajustable Nylon Reflectivo", category: "accesorios", price: 24900, buyPrice: 16000 },
  { id: 8, name: "Correa Retráctil 5m Antideslizante", category: "accesorios", price: 67900, buyPrice: 52000 },
  { id: 9, name: "Shampoo Antipulgas Perros 500ml", category: "higiene", price: 29900, buyPrice: 21000 },
  { id: 10, name: "Cepillo Doble Cara Pelo Largo", category: "higiene", price: 18900, buyPrice: 13000 },
  { id: 11, name: "Premio Dogourmet Hueso Dental (x6)", category: "dogourmet", price: 14900, buyPrice: 10000 },
  { id: 12, name: "Pro Plan Adulto Razas Grandes (15kg)", category: "perros", price: 245000, buyPrice: 198000 },
  { id: 13, name: "Cat Chow Adultos Indoor (3kg)", category: "gatos", price: 52000, buyPrice: 42000 },
  { id: 14, name: "Ropa Impermeable Perro Talla M", category: "accesorios", price: 58900, buyPrice: 44000 },
  { id: 15, name: "Kit Baño Completo para Gatos", category: "higiene", price: 42000, buyPrice: 32000 },
  { id: 16, name: "Snack Dogourmet Mix Sabores (1kg)", category: "dogourmet", price: 38500, buyPrice: 29000 },
  { id: 17, name: "Arnes Acolchado Ajustable Gatos", category: "accesorios", price: 35900, buyPrice: 27000 },
  { id: 18, name: "Hills Science Diet Adultos (12kg)", category: "mascotas", price: 198000, buyPrice: 162000 },
  { id: 19, name: "Cama Redonda Esponjosa 60cm", category: "mascotas", price: 89000, buyPrice: 68000 },
  { id: 20, name: "Bebedero Automático 2.5L", category: "mascotas", price: 74900, buyPrice: 58000 },
  { id: 21, name: "Pro Plan Cachorro Razas Grandes (15kg)", category: "perros", price: 265000, buyPrice: 212000 },
  { id: 22, name: "Whiskas Leche para Gatitos 200ml", category: "gatos", price: 8900, buyPrice: 6500 },
  { id: 23, name: "Pasta Dental Enzymatica Perros 75ml", category: "higiene", price: 22900, buyPrice: 17000 },
  { id: 24, name: "Snack Dogourmet Jamón Ibérico (200g)", category: "dogourmet", price: 24900, buyPrice: 18000 },
  { id: 25, name: "Comedero Acero Inoxidable Antideslizante", category: "mascotas", price: 32900, buyPrice: 24000 },
  { id: 26, name: "Juguete Kong Clásico Talla L", category: "accesorios", price: 45900, buyPrice: 34000 },
  { id: 27, name: "Royal Canin Persian Gatos (2kg)", category: "gatos", price: 87000, buyPrice: 70000 },
  { id: 28, name: "Nexgard Antipulgas y Garrapatas (3 meses)", category: "mascotas", price: 119000, buyPrice: 96000 },
  { id: 29, name: "Dog Chow Adulto Razas Pequeñas (17kg)", category: "perros", price: 185000, buyPrice: 152000 },
  { id: 30, name: "Arena Sanitaria Premium Silica 3.8L", category: "gatos", price: 38900, buyPrice: 29000 },
  { id: 31, name: "Rascador Árbol Gatos con Hamaca 1.5m", category: "mascotas", price: 142000, buyPrice: 115000 },
  { id: 32, name: "Snack Dogourmet Corazones de Pollo 500g", category: "dogourmet", price: 19900, buyPrice: 14000 },
  { id: 33, name: "Mochila Transportadora Mascotas 35cm", category: "accesorios", price: 98000, buyPrice: 78000 },
  { id: 34, name: "Shampoo Hidratante Gatos de Pelo Largo", category: "higiene", price: 27900, buyPrice: 21000 },
  { id: 35, name: "Pedigree Latas Adulto Pollo 400g x6", category: "perros", price: 56900, buyPrice: 45000 },
  { id: 36, name: "Pro Plan Esterilizado Indoor 7.5kg", category: "gatos", price: 175000, buyPrice: 140000 },
  { id: 37, name: "Cuna Ortopédica Memory Foam Talla XL", category: "mascotas", price: 165000, buyPrice: 132000 },
  { id: 38, name: "Snack Dogourmet Galletas Dental 400g", category: "dogourmet", price: 16900, buyPrice: 12500 },
  { id: 39, name: "Correa Doble Agarre Anti-jale", category: "accesorios", price: 52900, buyPrice: 40000 },
  { id: 40, name: "Hills Prescription Diet Kidney Care 3.9kg", category: "mascotas", price: 189000, buyPrice: 152000 },
];

PRODUCTOS_DB.forEach(function (producto, index) {
  producto.description = DESCRIPCIONES[index % DESCRIPCIONES.length];
  producto.emoji = EMOJIS_CATEGORIA[producto.category] || "🐾";
  producto.faved = false;
});

var categoriaActiva = "all";
var busquedaTexto = "";
var pagina = 0;
var cargando = false;
var todoCargado = false;
var TAMANO_PAGINA = 8;
var carrito = JSON.parse(localStorage.getItem("servimax-carrito")) || [];

/**
 * @param {number} n
 * @returns {string}  Ej: "$210.957"
 */
function formatearPrecio(n) {
  return "$" + n.toLocaleString("es-CO");
}
/**
* @returns {Array}
*/
function productosFiltrados() {
  return PRODUCTOS_DB.filter(function (producto) {
    var coincideCategoria = categoriaActiva === "all" || producto.category === categoriaActiva;
    var texto = busquedaTexto.toLowerCase();
    var coincideBusqueda = !texto
      || producto.name.toLowerCase().includes(texto)
      || producto.category.includes(texto);
    return coincideCategoria && coincideBusqueda;
  });
}
/**
* @param {string} categoryId
* @returns {number}
*/
function contarPorCategoria(categoryId) {
  if (categoryId === "all") return PRODUCTOS_DB.length;
  return PRODUCTOS_DB.filter(function (p) { return p.category === categoryId; }).length;
}

/**
* @param {number} productId
*/
function agregarAlCarrito(productId) {
  console.log("Agregando producto al carrito:", productId);
  var producto = PRODUCTOS_DB.find(function (p) { return p.id === productId; });
  if (!producto) return;

  var existente = carrito.find(function (item) { return item.id === productId; });
  if (existente) {
    existente.quantity += 1;
  } else {
    carrito.push({ ...producto, quantity: 1 });
  }
  guardarCarrito();
  actualizarBadgeCarrito();
  mostrarToast("🛒 Añadido al carrito");
}

/**
* @param {number} productId
*/
function quitarDelCarrito(productId) {
  carrito = carrito.filter(function (item) { return item.id !== productId; });
  guardarCarrito();
  actualizarBadgeCarrito();
  renderizarCarrito();
}

/**
 * Actualiza la cantidad de un producto en el carrito.
 * @param {number} productId
 * @param {number} quantity
 */
function actualizarCantidadCarrito(productId, quantity) {
  if (quantity <= 0) {
    quitarDelCarrito(productId);
    return;
  }
  var item = carrito.find(function (item) { return item.id === productId; });
  if (item) {
    item.quantity = quantity;
    guardarCarrito();
    renderizarCarrito();
  }
}

function guardarCarrito() {
  localStorage.setItem("servimax-carrito", JSON.stringify(carrito));
}
/**
 * @returns{ number }
 */
function obtenerTotalCarrito() {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].quantity;
  }
  return total;
}

function actualizarBadgeCarrito() {
  var badge = document.getElementById("cart-badge");
  var totalItems = 0;
  for (var i = 0; i < carrito.length; i++) {
    totalItems += carrito[i].quantity;
  }
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? "block" : "none";
}

function renderizarCategorias() {
  var bar = document.getElementById("categories-bar");

  bar.innerHTML = CATEGORIAS.map(function (cat) {
    return `
    <button class="cat-btn ${cat.id === categoriaActiva ? "active" : ""}" data-cat="${cat.id}">
      <span class="emoji">${cat.emoji}</span>
      ${cat.label}
      <span class="count">${contarPorCategoria(cat.id)}</span>
    </button>
  `;
  }).join("");

  var botones = bar.querySelectorAll(".cat-btn");
  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
      categoriaActiva = this.dataset.cat;
      reiniciarGrid();
    });
  }
}
/**
 * @param {Array} products - Subconjunto de productos a renderizar
 */
function renderizarProductos(productos) {
  var grid = document.getElementById("products-grid");

  for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];
    var card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = (i * 0.05) + "s";

    card.innerHTML = `
      <div class="card-image">
        <div class="placeholder">${producto.emoji}</div>
        <button class="card-fav ${producto.faved ? "faved" : ""}" data-id="${producto.id}" title="Favorito">
          ${producto.faved ? "❤️" : "🤍"}
        </button>
      </div>
      <div class="card-body">
        <span class="card-tag">${producto.category}</span>
        <div class="card-name">${producto.name}</div>
        <div class="card-desc">${producto.description}</div>
        <div class="card-footer">
          <div>
            <span class="card-price">${formatearPrecio(producto.price)}</span>
            <span class="card-price-old">${formatearPrecio(producto.buyPrice)}</span>
          </div>
          <button class="btn-add" data-id="${producto.id}">+ Agregar</button>
        </div>
      </div>
    `;
    card.querySelector(".card-fav").addEventListener("click", function (e) {
      e.stopPropagation();
      var productData = PRODUCTOS_DB.find(function (p) { return p.id === +e.currentTarget.dataset.id; });
      productData.faved = !productData.faved;
      e.currentTarget.innerHTML = productData.faved ? "❤️" : "🤍";
      e.currentTarget.classList.toggle("faved", productData.faved);
      mostrarToast(productData.faved ? "❤️ Añadido a favoritos" : "Removido de favoritos");
    });
    card.querySelector(".btn-add").addEventListener("click", function (e) {
      e.stopPropagation();
      var productId = +e.currentTarget.dataset.id;
      agregarAlCarrito(productId);
    });

    grid.appendChild(card);
  }
}

function cargarSiguientePagina() {
  if (cargando || todoCargado) return;

  cargando = true;
  mostrarLoader(true);

  setTimeout(function () {
    var todosProductos = productosFiltrados();
    var inicio = pagina * TAMANO_PAGINA;
    var trozo = todosProductos.slice(inicio, inicio + TAMANO_PAGINA);

    if (trozo.length === 0 && pagina === 0) {
      mostrarVacio(true);
    } else {
      mostrarVacio(false);
      renderizarProductos(trozo);
      pagina++;
      if (pagina * TAMANO_PAGINA >= todosProductos.length) {
        todoCargado = true;
      }
    }
    actualizarEncabezadoSeccion(todosProductos.length);
    mostrarLoader(false);
    cargando = false;
  }, 600);
}

function reiniciarGrid() {
  pagina = 0;
  todoCargado = false;
  document.getElementById("products-grid").innerHTML = "";
  renderizarCategorias();
  cargarSiguientePagina();
}
function mostrarLoader(visible) {
  document.getElementById("loader").classList.toggle("active", visible);
}
function mostrarVacio(visible) {
  document.getElementById("empty").classList.toggle("active", visible);
}
function actualizarEncabezadoSeccion(total) {
  var cat = CATEGORIAS.find(function (c) { return c.id === categoriaActiva; });
  document.getElementById("section-title").textContent =
    categoriaActiva === "all" ? "Todos los productos" : cat.label;
  document.getElementById("section-count").textContent =
    total + " producto" + (total !== 1 ? "s" : "");
}
function mostrarToast(message) {
  var toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timerId);
  toast._timerId = setTimeout(function () { toast.classList.remove("show"); }, 2500);
}
/**
 * @param {boolean} visible
 */
function mostrarModalCarrito(visible) {
  var modal = document.getElementById("cart-modal");
  modal.classList.toggle("active", visible);
  if (visible) {
    renderizarCarrito();
  }
}
function renderizarCarrito() {
  var cartItems = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");
  var cartEmpty = document.getElementById("cart-empty");

  if (carrito.length === 0) {
    cartItems.innerHTML = "";
    cartEmpty.style.display = "block";
    cartTotal.textContent = formatearPrecio(0);
    return;
  }

  cartEmpty.style.display = "none";
  var html = "";
  for (var i = 0; i < carrito.length; i++) {
    var item = carrito[i];
    html += `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatearPrecio(item.price)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="cart-btn" onclick="actualizarCantidadCarrito(${item.id}, ${item.quantity - 1})">-</button>
        <span class="cart-quantity">${item.quantity}</span>
        <button class="cart-btn" onclick="actualizarCantidadCarrito(${item.id}, ${item.quantity + 1})">+</button>
        <button class="cart-remove" onclick="quitarDelCarrito(${item.id})">🗑️</button>
      </div>
    </div>
  `;
  }
  cartItems.innerHTML = html;

  cartTotal.textContent = formatearPrecio(obtenerTotalCarrito());
}
var sentinel = document.createElement("div");
sentinel.id = "sentinel";
document.querySelector("main").appendChild(sentinel);

var scrollObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting) {
      cargarSiguientePagina();
    }
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px 200px 0px",
  }
);
scrollObserver.observe(sentinel);
var searchTimer;

document.getElementById("search-input").addEventListener("input", function (e) {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function () {
    busquedaTexto = e.target.value.trim();
    reiniciarGrid();
  }, 300);
});
renderizarCategorias();
cargarSiguientePagina();
actualizarBadgeCarrito();
