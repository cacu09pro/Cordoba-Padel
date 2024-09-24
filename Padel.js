const torneos = [
    {
        "imagen": "Fotos/Torneo-1.jpg",
        "fechaInicio": "24/10/2024",
        "fechaFin": "26/10/2024",
        "zona": "Norte",
    },
    {
        "imagen": "Fotos/Torneo-2.jpg",
        "fechaInicio": "04/11/2024",
        "fechaFin": "06/11/2024",
        "zona": "Sur",
    },
    {
        "imagen": "Fotos/Torneo-3.png",
        "fechaInicio": "14/10/2024",
        "fechaFin": "16/10/2024",
        "zona": "centro",
    },
    {
        "imagen": "Fotos/Torneo-4.png",
        "fechaInicio": "04/10/2024",
        "fechaFin": "06/10/2024",
        "zona": "Sur",
    },
    {
        "imagen": "Fotos/Torneo-5.jpg",
        "fechaInicio": "20/10/2024",
        "fechaFin": "22/10/2024",
        "zona": "Norte",
    },
    {
        "imagen": "Fotos/Torneo-6.png",
        "fechaInicio": "11/11/2024",
        "fechaFin": "13/11/2024",
        "zona": "Centro",
    }
]
//MERCH//
function filtro_merch(tipomerch) {
    document.querySelectorAll(".remera, .pantalon, .buzo, .zapa, .gorra").forEach((element) => {
        element.style.display = "none";
    });
    document.querySelectorAll(`.${tipomerch}`).forEach((element) => {
        element.style.display = "block";
    });
}

//EQUIPO//
function filtrarmarca(marcaName) {
    console.log(marcaName)
    document.querySelectorAll(".palas img").forEach((element) => {
        element.style.display = "none";
        
    })

    document.querySelectorAll(".pelotas img").forEach((element) => {
        element.style.display = "none";

    })

    document.querySelectorAll(`.${marcaName}`).forEach((element) => {
        element.style.display = "inline";

    });
}

function filtrarequipo(tipoEquipo) {
    document.querySelector(`.palas`).style.display = "none";
    document.querySelector(`.pelotas`).style.display = "none";
    document.querySelector(`.${tipoEquipo}`).style.display = "block";

    displaymarca();
}
//TORNEO//
function mostrarTorneos(listaTorneos = torneos) {
    let torneosHTML = "";
    listaTorneos.forEach((torneo) => {
        torneosHTML += `<img src="${torneo.imagen}" alt="Imagen torneo" class="pics">`
    })
    document.querySelector(".torneospics").innerHTML = torneosHTML;
}
function displayMenu(classMenu) {
    document.querySelector(classMenu).style.display = "block";
}
function closeMenu() {
    document.querySelector('.submenu').style.display = "none";
}

function recargarPagina(pagina) {
    window.location.href = pagina;
}