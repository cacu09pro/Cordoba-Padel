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
const home_torneo = [
    {
        Opt1: "Home",
        Opt2: "Equipo",
        Opt3: "Merch",
    }
]
const filtro_torneo_zona = [
    {
        zona: "Norte",
        zona: "Sur",
        zona: "Centro",
    }
]
const filtro_torneo_fecha = [
    {
    }
]
const home_equipo = [
    {
        Opt1: "Home",
        Opt2: "Torneo",
        Opt3: "Merch",
    }
]
const filtro_equipo_palas = [
    {
        marca: "Adidas",
        marca: "Nox",
        marca: "Puma",
    }
]
const filtro_equipo_pelotas = [
    {
        marca: "Wilson",
        marca: "Bullpadel",
        marca: "Odea",
    }
]
const home_merch = [
    {
        Opt1: "Home",
        Opt2: "Torneo",
        Opt3: "Equipo",
    }
]
const filtro_merch = [
    {
        marca: "Adidas",
        marca: "Nike",
        marca: "Puma",
    }
]

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

function recargarPagina(pagina) {
    window.location.href = pagina;
}