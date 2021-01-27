class productos {
    constructor(nombre, id, precio, descuento, total){
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.descuento = descuento;
        this.total = total;
    }
    fichaTenica(){
        return `Este ${this.nombre} de alta calidad tiene un precio de ${this.precio} pero como hoy estamos en promocion tiene un descuento de ${this.descuento} quedando en un precio total de ${this.total}`;
    }
}
const bicicleta = new productos ("bicicleta",1,100,25,75);
console.log(bicicleta.fichaTenica());


function pintar(){
    document.getElementById('pintar1').innerHTML= bicicleta.fichaTenica();
    document.getElementById('pintar1').style.display= 'block';
    console.log("si entro");
}
function despintar(){
    document.getElementById('pintar1').style.display= 'none';
}