recipe = {
    id:1,
    name: "Hamburguesas de Lentejas",
    image: "lentburg.jpg",
    descripcion:{
        trabajo:40,
        espera:30,
        coccion:25,
        porciones:2
    },
    ingredientes:[
        {nombre:"Lentejas", cantidad:250, unidad:"grs"},
        {nombre:"Zanahorias", cantidad:1, unidad:""},
        {nombre:"Cebolla", cantidad:0.5, unidad:""},
        {nombre:"Diente de ajo", cantidad:1, unidad:""},
        {nombre:"Morrón", cantidad:0.5,unidad:""},
        {nombre:"Tomate deshidratado", cantidad:3, unidad:""},
        {nombre:"Cebolla de verdeo", cantidad:1, unidad:""},
        {nombre:"Pan rallado", cantidad:"", unidad:"A ojo"},
        {nombre:"Sal, pimienta", cantidad: "", unidad:"A gusto"},
        {nombre:"Aceite", cantidad:"", unidad:""}
    ],
    instrucciones:[
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
instrucciones = ""
// loop para construir lista de ingredientes y pasos
for (let i = 0; i < length; i++) {
    cantidad = recipe.ingredientes[i].cantidad;
    ingredientes+="<li>";
    if (cantidad != 0) {
        ingredientes+=`<span class="ing_value"> ${cantidad} </span>`
    }
    ingredientes+=`
        ${recipe.ingredientes[i].unidad} ${recipe.ingredientes[i].nombre}
    </li>
    `
}
length2 = recipe.instrucciones.length
for (let i = 0; i < length2; i++) {
    instrucciones+=`
    <li>
    ${recipe.instrucciones[i]}
    </li>
    `;
}
//Estructura de receta
var structure = `
    <h2>${recipe.name}</h2>
    <img src="assets/${recipe.image}" alt="${recipe.name}">
    <h3>
            Porciones
    </h3>
    <input type="number" name="toggle" id="toggle" min=1 max=100 placeholder=${recipe.descripcion.porciones}>
    
    <div class=ingredientes>
        <h3>Ingredientes</h3>
        <ul>
            ${ingredientes}
        </ul>
    </div>
    <div class="instrucciones">
        <h3>Instrucciones</h3>
        <ol>${instrucciones}</ol>
    </div>
`

//Construccion básica de página
document.getElementsByTagName("title")[0].innerHTML = recipe.name;
document.getElementsByTagName("article")[0].innerHTML = structure;

//fetch valor de porciones//
var x = document.getElementById("toggle");

//actualizar la pagina cuando cambian las porciones
document.getElementById("toggle").oninput = function() {metrictoggle()};
function metrictoggle() {
    mult = x.value/recipe.descripcion.porciones
    for (let i = 0; i < length; i++) {
        document.getElementsByClassName("ing_value")[i].innerHTML = recipe.ingredientes[i].cantidad*x.value/recipe.descripcion.porciones;
    }
}