const contenedor = document.getElementById("productos");

// ==========================
// RENDER PRODUCTOS
// ==========================
function renderProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(prod => {
        contenedor.innerHTML += `
        <div id="prod-${prod.id}" class="col-md-4 producto" data-categoria="${prod.categoria}">
            <div class="card mb-4">
                <img src="${prod.imagen}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">${prod.descripcion}</p>
                    <a href="${prod.link}" target="_blank" class="btn btn-dark">
                        Ver en Amazon
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