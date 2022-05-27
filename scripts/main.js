data = [
    {
        id:1,
        cod:"lentburg",
        nombre: "Hamburguesas de Lentejas",
        descripcion:{
            trabajo:40,
            espera:60,
            porciones:2
        }
    },
    {
        id:2,
        cod:"muffins",
        nombre: "Muffins",
        descripcion:{
            trabajo:40,
            espera:20,
            porciones:2
        }
    }
]

length = data.length
list = ""

for (let i in data) {
    nombre = data[i].cod
    list+=`
    <li class="img_wrap">
            <a href="${nombre}.html" class="container">
                <img src="assets/${nombre}.jpg" alt="${data[i].nombre}">
                <p>${data[i].nombre}</p>
                <p class="rec_info">
                    ${data[i].nombre} <br>
                    Tiempo de trabajo: ${data[i].descripcion.trabajo} min <br>
                    Tiempo de espera: ${data[i].descripcion.espera} min
                </p>
            </a>
        </li>
    `;
}

document.getElementsByTagName("menu")[0].innerHTML = list;