function save(){
    db.collection("patient").add({
        age: document.getElementById("age").value,
        ocupation: document.getElementById("ocupation").value,
        solarGrade: document.getElementById("grade").value,
        topography: document.getElementById("topography").value,
        gender: document.getElementById("gender").value,
        sympthom1: document.getElementById("asoc1").value,
        sympthom2: document.getElementById("asoc2").value,
        sympthom3: document.getElementById("asoc3").value,
        sympthom4: document.getElementById("asoc4").value,
    })
    .then((docRef) => {
        alert("Registro Exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}