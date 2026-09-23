const paginas = document.querySelectorAll(".pagina");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

const contador = document.getElementById("contador");

let paginaActual = 0;

// Mostrar página
function mostrarPagina(numero) {

```
paginas.forEach(function(pagina) {
    pagina.classList.remove("activa");
});

paginas[numero].classList.add("activa");

contador.textContent =
    (numero + 1) + " / " + paginas.length;


// Ocultar botón anterior en la portada
if (numero === 0) {
    anterior.style.visibility = "hidden";
} else {
    anterior.style.visibility = "visible";
}


// Ocultar siguiente en la última página
if (numero === paginas.length - 1) {
    siguiente.style.visibility = "hidden";
} else {
    siguiente.style.visibility = "visible";
}
```

}

// Siguiente
siguiente.addEventListener("click", function() {

```
if (paginaActual < paginas.length - 1) {

    paginaActual++;

    mostrarPagina(paginaActual);

}
```

});

// Anterior
anterior.addEventListener("click", function() {

```
if (paginaActual > 0) {

    paginaActual--;

    mostrarPagina(paginaActual);

}
```

});

// Teclado
document.addEventListener("keydown", function(event) {

```
if (event.key === "ArrowRight") {

    if (paginaActual < paginas.length - 1) {

        paginaActual++;

        mostrarPagina(paginaActual);

    }

}


if (event.key === "ArrowLeft") {

    if (paginaActual > 0) {

        paginaActual--;

        mostrarPagina(paginaActual);

    }

}
```

});

// Iniciar
mostrarPagina(paginaActual);
