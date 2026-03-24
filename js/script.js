const contenedor = document.getElementById("productos");

// ==========================
// RENDER PRODUCTOS
// ==========================
function renderProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(prod => {
       contenedor.innerHTML += `
<div id="prod-${prod.id}" class="col-md-4 producto mb-2" data-categoria="${prod.categoria}">
    <div class="card mb-4 h-100 shadow-sm">

        <img src="${prod.imagen}" class="card-img-top " alt="${prod.nombre}">

        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${prod.nombre}</h5>

            <p class="card-text small text-muted">
                ${prod.descripcion.substring(0, 100)}...
            </p>

            <!-- BOTON MODAL -->
            <button class="btn btn-outline-dark mb-2" onclick="abrirModal(${prod.id})">
                👀 Quick View
            </button>

            <!-- BOTON AMAZON -->
            <a href="${prod.link}" target="_blank" class="btn btn-dark mt-auto">
                🔥 Buy on Amazon
            </a>
        </div>
    </div>
</div>
`;
    });
}

// ==========================
// FILTRO
// ==========================
const botones = document.querySelectorAll(".filtro");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.dataset.categoria;

        if (categoria === "all") {
            renderProductos(productos);
        } else {
            const filtrados = productos.filter(p => p.categoria === categoria);
            renderProductos(filtrados);
        }

        // estilos activos
        botones.forEach(b => b.classList.remove("btn-dark"));
        botones.forEach(b => b.classList.add("btn-outline-dark"));
        boton.classList.remove("btn-outline-dark");
        boton.classList.add("btn-dark");
    });
});

// ==========================
// INIT
// ==========================
renderProductos(productos);


// window.addEventListener("load", () => {
//     if (window.location.hash) {
//         const el = document.querySelector(window.location.hash);
//         if (el) {
//             el.scrollIntoView({ behavior: "smooth", block: "center" });
//             el.style.border="4px solid"
//             el.style.borderColor = "red";
//         }
//     }
// });

let elementoActual = null;
function resaltarElemento() {
     const hash = window.location.hash;
    if (!hash) return;

    const container = document.querySelector(hash);
    if(!container) return;

    const el = container.querySelector(".card");
    if(!el) return;

    //Quitar el estilo anterior
    if(elementoActual) {
        elementoActual.style.border= "";
    }


    // Scroll
    el.scrollIntoView({ behavior: "smooth", block:"center"  });

    // Aplicar estilo
    el.style.border ="4px solid black";

    // Guardar referencia
    elementoActual = el;


}//resaltar Elemento

// Al cargar
window.addEventListener("load", resaltarElemento);

// Cuando cambia el hash
window.addEventListener("hashchange", resaltarElemento);




///Modal

function abrirModal(id) {
    const prod = productos.find(p => p.id === id);
    const modalContenido = document.getElementById("modalContenido");

    modalContenido.innerHTML = `
        <div class="row">

            <div class="col-md-6">
                <img src="${prod.imagen}" class="img-fluid rounded">
            </div>

            <div class="col-md-6">
                <h3>${prod.nombre}</h3>

                <p class="text-muted">
                    ${prod.descripcion}
                </p>

                <ul class="small">
                    <li>✔ High Quality</li>
                    <li>✔ Best Seller</li>
                    <li>✔ Recommended for Home Gym</li>
                </ul>

                <a href="${prod.link}" target="_blank" class="btn btn-dark w-100 mt-3">
                    🔥 Buy Now on Amazon
                </a>

                <small class="text-muted">
                    Click outside to close
                </small>
            </div>

        </div>
    `;

    window.location.hash = `prod-${id}`;

    resaltarElemento();

    const modal = new bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
}


