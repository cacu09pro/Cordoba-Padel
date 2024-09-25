const torneos = [
    {
        "imagen": "Fotos/Torneo-1.jpg",
        "fechaInicio": "2024-10-24",
        "fechaFin": "2024-10-26",
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
        "zona": "Centro",
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
function displaysubmarca(tiposubmarca) {
    document.querySelector(".nox").style.display = "none";
    document.querySelector(".adidas").style.display = "none";
    document.querySelector(".wilson").style.display = "none";
    document.querySelector(`.${tiposubmarca}`).style.display = "block";
    displaysubmarca();

}

function filtrarequipo(tipoEquipo) {
    document.querySelector(`.palas`).style.display = "none";
    document.querySelector(`.pelotas`).style.display = "none";
    document.querySelector(`.${tipoEquipo}`).style.display = "block";


}
//TORNEO//
function mostrarTorneos(listaTorneos = torneos) {
    let torneosHTML = "";
    listaTorneos.forEach((torneo) => {
        torneosHTML += `<img src="${torneo.imagen}" alt="Imagen torneo" class="pics">`
    })
    document.querySelector(".torneospics").innerHTML = torneosHTML;
}

let display = 0;

function displayMenu(classMenu) {
    if (display == 0) {
        display = 1;
    } else {
        display = 0;
    }

    if (display == 1) {
        document.querySelector(classMenu).style.display = "block";
    } else {
        document.querySelector(classMenu).style.display = "none";
    }

}
function closeMenu() {
    document.querySelector('.submenu').style.display = "none";
}

function recargarPagina(pagina) {
    window.location.href = pagina;
}

function filtrar_zona(zonaTipo) {
    let zonaFiltrada = torneos.filter((torneo) => {
        return torneo.zona == zonaTipo || zonaTipo == "Todas"
    });

    mostrarTorneos(zonaFiltrada);
}
