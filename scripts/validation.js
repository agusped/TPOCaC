// Validacion de datos
function validation() {
    var form = document.getElementById("contact").elements;
    for (let i = 0; i<4; i++){
        if (document.forms["contact"][i].value == "") {
            alert(`Falta completar la sección ${document.forms["contact"][i].name}`);
            return false;
        }
    }
}