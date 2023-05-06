function total(precio){
    if(precio ==null){
        alert("Ingrese un precio")
    }
}
let continuar = true;
while (continuar) {
    let fecha = prompt("Ingrese fecha");
    const id = prompt("Ingrese su ID del libro");
    let autor = prompt("Ingrese el autor");
    let titulo = prompt("Ingrese el titulo del libro");
    let editorial = prompt("Ingrese su editorial");
    let precio = prompt("Ingrese su precio");
     alert("La fecha es: " + fecha + " Coloque la ID: " + id + " El autor es: " + autor + " Titulo: " + titulo + " Editorial: " + editorial + " Coloque precio:$ " + precio);
    continuar = confirm("Quiere continuar.")  
};

