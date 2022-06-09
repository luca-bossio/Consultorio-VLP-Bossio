
function consultaNutricional() {

    let nombre = document.getElementById("nombre").value
    localStorage.setItem("nombre",nombre);


// Utilizando OR
    nombre =[NaN,undefined,null,0]
for (const nombres of nombre) {
    let salida=nombres || "PON ALGO"
    console.log (salida)
}

    let fecha =  document.getElementById("fecha").value
    localStorage.setItem("fecha",fecha)

    let horario = document.getElementById("horario").value
    localStorage.setItem("horario",horario)

    let consulta = document.getElementById("consulta").value
    localStorage.setItem("consulta",consulta)

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

    

    Swal.fire (
        'Tu consulta fue agendada con exito!',
        `Fecha: ${localStorage.getItem("fecha")}
        Horario: ${localStorage.getItem("horario")}
        Tipo: ${tipo}
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
    
