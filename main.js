//ENTREGA DEBE TENER:

//Objetivos generales
//-Armar la estructura base del simulador.
//-Integrar las herramientas JS aprendidas hasta aquí.

//Objetivos específicos
//-Declara variables, constantes y arrays.
//-Crea una o más funciones JS que generen interacción.
//-Agrega los ciclos de iteración y/o condicionales necesarios, para que tu proyecto funcione correctamente.
//-Integra el uso de la Consola JS y de los cuadros de diálogo Prompt, Confirm y Alert.


function calculadoraEdad(fechaNacimiento, fechaActual) {
    const [anoNacimiento, mesNacimiento, diaNacimiento] = fechaNacimiento
    const [anoActual, mesActual, diaActual] = fechaActual


    let edadAnos = anoActual - anoNacimiento
    let edadMeses = mesActual - mesNacimiento
    let edadDias = diaActual - diaNacimiento

    if (edadDias < 0) {
        edadDias += 30
        edadMeses--
    }

    if (edadMeses < 0) {
        edadMeses += 12
        edadAnos--
    }

    return {anos: edadAnos, meses: edadMeses, dias: edadDias}
}

const fechaNacimiento = [
    parseInt(prompt("Ingresa tu año de nacimiento (EJ: 1994):")),
    parseInt(prompt("Ingresa tu mes de nacimiento (Ej: 1):")),
    parseInt(prompt("Ingresa tu día de nacimiento (Ej: 17):"))
]

const fechaActual = [
    parseInt(prompt("Ingresa el año actual (Ej: 2024):")),
    parseInt(prompt("Ingresa el mes actual (EJ: 7):")),
    parseInt(prompt("Ingresa el día actual (EJ: 10):"))
]

const edad = calculadoraEdad(fechaNacimiento, fechaActual)

console.log(`Resultado final: Años: ${edad.anos}, Meses: ${edad.meses}, Días: ${edad.dias}`)

alert(`Usted tiene ${edad.anos} años, ${edad.meses} meses y ${edad.dias} días.`)

