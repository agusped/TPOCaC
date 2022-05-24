recipe = {
    id:1,
    name: "Hamburguesas de Lentejas",
    descripcion:{
        trabajo:40,
        espera:30,
        coccion:25,
        porciones:2
    },
    image: "lentburg.jpeg",
    "ingredientes":[
        {"nombre":"Lentejas", "cantidad":250},
        {"nombre":"Zanahorias", "cantidad":1},
        {"nombre":"Cebolla", "cantidad":0.5},
        {"nombre":"Diente de ajo", "cantidad":1},
        {"nombre":"Morrón", "cantidad":0.5},
        {"nombre":"Tomate deshidratado", "cantidad":3},
        {"nombre":"Cebolla de verdeo", "cantidad":1},
        {"nombre":"Pan rallado", "cantidad":""},
        {"nombre":"Sal, pimienta", "cantidad": ""},
        {"nombre":"Aceite", "cantidad":""}
    ],
    "instrucciones":[
        "Dejar las lentejas en remojo durante medio dia y cocinar alrededor de 40 minutos, o directamente cocinar en olla a presión la misma cantidad de tiempo. Tienen que quedar un poco blandas",
        "Procesar la lenteja y rallar la zanahoria. Juntar en un bowl",
        "Rehidratar los tomates en agua caliente 1 minuto en el microondas, picar y reservar",
        "Picar la cebolla, el ajo y el morrón. Saltear en una sartén hasta que la cebolla esté transparente, agregar al bowl",
        "Poner la clara y un poco de pan rallado, mezclar con la mano, agregar pan rallado hasta que la mezcla mantenga forma. Poner a reposar 30 minutos en heladera",
        "Hacer bollitos y aplastarlos, cocinar a la plancha o al horno, alrededor de 25 minutos"
    ]
}

length = recipe.ingredientes.length;

ingredientes = ""
for (let i = 0; i < length; i++) {
    cantidad = parseFloat(recipe.ingredientes[i].cantidad)
    ingredientes+=`
    <li>
        <span class="ing_value"> ${cantidad} </span>
         ${recipe.ingredientes[i].nombre}
    </li>
    `
}
var structure = `
    <h2>${recipe.name}</h2>
    <h3>
            Porciones
    </h3>
    <input type="number" name="toggle" id="toggle" min=1 placeholder=${recipe.descripcion.porciones}>
    
    <div class=ingredientes>
        <h3>Ingredientes</h3>
        <ul>
`+
ingredientes
+`
        </ul>
    </div>
`

document.getElementsByTagName("title")[0].innerHTML = recipe.name;
document.getElementsByTagName("article")[0].innerHTML = structure;

var x = document.getElementById("toggle");

document.getElementById("toggle").oninput = function() {metrictoggle()};
function metrictoggle() {
    mult = x.value/recipe.descripcion.porciones
    for (let i = 0; i < length; i++) {
        document.getElementsByClassName("ing_value")[i].innerHTML = 
        recipe.ingredientes[i].cantidad*x.value/recipe.descripcion.porciones;
    }
}