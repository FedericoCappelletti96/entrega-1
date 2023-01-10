

let nombre = prompt("Introduce el nombre? ")
let edad = prompt("Introduce la edad? ")

function saludoPrincipal(nombre, edad) {
    alert(`Bienvenido a CinePrime ${nombre} tienes ${edad}`)
}


saludoPrincipal(nombre, edad)


let peliculaElegida = prompt("Que pelicula quieres elegir? Las opciones son (Elegir con las letras a, b, c): A) Terminator B) El conjuro C) Cars 2");

if (edad < 18 && (peliculaElegida === "A" || peliculaElegida === "B")) {
    alert("Eres menor de edad no puedes ver estas peliculas")
    let peliculaElegida = prompt("Introduce la nueva pelicula apta para ti? ")
    alert(` La pelicula elegida es ${peliculaElegida}` )
    
  
 } else {
    alert(`La peluculas que elegiste es ${peliculaElegida}` )
}


let cuantasReservas = parseInt(prompt("Cuantas reservas de asiento quiere?"));
    alert(`El total de reservas: ${cuantasReservas}`);

for (let i = 0; i < cuantasReservas; i++) {
    let nombreDeLaPersona = prompt("Introduce el nombre de la persona que ocupael asiento? ")
     alert(`El asiento ${i} es para ${nombreDeLaPersona}`)
}




let comboComida = prompt("Quiere agregar a su reserva un combo pochoclos+bebida?SI/NO");
if(comboComida == "SI") { 
    let eleccionDeComida = prompt("Introduce la comida que quieres?  Opciones: A)Pochoclos+bebida B)Bebida C)Pochoclo")
    alert(`La opcione de comida que eligio ustes es la ${eleccionDeComida}`)
}else  { 


alert(`No no agrego comida a su funcion `)
}

let tieneDescuento = prompt("Tienes codigo de descuento? SI/NO ");
if(tieneDescuento === "SI") {
    let codigoDeDescuento = prompt("Pone el codigo de descuento? ")
    while(codigoDeDescuento != "PRIME123") {
        alert ("El codigo de descuento es incorrecto")
        let codigoDeDescuento = prompt("Pone el codigo de descuento? ")
         }

 } else {
    alert("No tienes descuentos")

 }
 alert(`${nombre} la peliculas que elgiste fue la opcion ${peliculaElegida} , el numero de reservas fueron de ${cuantasReservas}` )




 





