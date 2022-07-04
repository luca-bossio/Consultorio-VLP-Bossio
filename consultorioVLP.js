
function consultaNutricional() {

    let nombre = document.getElementById("nombre").value
    localStorage.setItem("nombre",nombre);


// Utilizando OR
    nombre =[NaN,undefined,null,0]
for (const nombres of nombre) {
    let salida=nombres || "PON ALGO"
    console.log (salida)
}


    let email = document.getElementById("email").value
    localStorage.setItem("email",email)

    let fecha =  document.getElementById("fecha").value
    localStorage.setItem("fecha",fecha)

    let horario = document.getElementById("horario").value
    localStorage.setItem("horario",horario)

    let consulta = document.getElementById("consulta").value
    localStorage.setItem("consulta",consulta)

    let formaConsulta = document.getElementById("formaConsulta").value
    localStorage.setItem("formaConsulta",formaConsulta)

    let atencion = document.getElementById("atencion").value
    localStorage.setItem("atencion",atencion)

    let paciente = document.getElementById("pacientes").value
    localStorage.setItem("cantPaciente",paciente)

    let precioDeLaConsulta = localStorage.getItem("cantPaciente")
        switch (precioDeLaConsulta) {
            case "1":
                precioDeLaConsulta = 1500 * precioDeLaConsulta;
                break;
            case "2":
                precioDeLaConsulta = 3000 * precioDeLaConsulta;
                break;
            case "3":
                precioDeLaConsulta = 5000 * precioDeLaConsulta;
                break;
        }

    let tipo = localStorage.getItem("consulta");
    switch(tipo){
        case "1":
            tipo = "consulta Normal";
            break
        case "2":
            tipo = "InBody";
            break
        case "3":
            tipo = "consulta con deportologo";
            break
    }

    let tipoConsulta = localStorage.getItem("formaConsulta");
    switch(tipoConsulta){
        case "1":
            tipoConsulta = "consulta presencial";
            break
        case "2":
            tipoConsulta = "consulta online";
            break
    }

    let tipoAtencion = localStorage.getItem("atencion");
    switch(tipoAtencion){
        case "1":
            tipoAtencion = "Osde";
            break
        case "2":
            tipoAtencion = "Swiss Medical";
            break
        case "3":
            tipoAtencion = "Atencion particular";
            break
    }

    

    Swal.fire (
        'Tu consulta fue agendada con exito!',
        `Fecha: ${localStorage.getItem("fecha")}
        Horario: ${localStorage.getItem("horario")}
        Email: ${localStorage.getItem("email")}
        Tipo: ${tipo}
        Forma: ${tipoConsulta}
        Medio de atencion: ${tipoAtencion}
        Precio: $${precioDeLaConsulta}
        `,
        'success'
      )

    }

function reiniciar(){
    localStorage.clear()
}


//desestructuracion con parametros
const tipoDeConsulta= {
    numerodeConsulta:1,
    nombreDeConsulta: "Consulta con deportologo",
    Precio : "$5000" ,
}

const desestructurar = ( {nombreDeConsulta, Precio} ) => {
    console.log(nombreDeConsulta, Precio)
}

desestructurar(tipoDeConsulta)

//spread de un arrays de precios
let precios = {Normal:1500,Inbody:3000,Deportologo:5000}
let precio={ ...precios }
console.log( precio)  

function obtenerConsultas () {
    const URLGET= "https://jsonplaceholder.typicode.com/posts"
    fetch(URLGET)
        .then ((resultado) => resultado.json())
        .then((data) =>console.log (data));
}

obtenerConsultas()
    
