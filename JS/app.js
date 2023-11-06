// Variables para almacenar el nombre
let nombreUser = prompt("Escribe tu nombre");
alert("Bienvenid@ " + nombreUser);

// Alertas de información al usuario
alert("En la siguiente pantalla podras observar los precios de los productos");
alert("- El Producto 1: Lemon Pie $10 - El Producto 2: Apple Pie $12 - El Producto 3: Ice Cream Cake $17")

// Variables para almacenar los precios de los productos
let precioProducto1 = 10;
let precioProducto2 = 12;
let precioProducto3 = 17;

// Función para calcular el costo total
function calcularCostoTotal(productos) {
    let costoTotal = 0;
    
    for (let i = 0; i < productos.length; i++) {
        let cantidad = parseInt(productos[i]);
        
        // Validación para asegurarse de que la cantidad sea un número válido y no negativo
        if (!isNaN(cantidad) && cantidad >= 0) {
            costoTotal += cantidad * (i === 0 ? precioProducto1 : i === 1 ? precioProducto2 : precioProducto3);
        } else {
            return "Por favor, ingrese cantidades válidas";
        }
    }
    
    return `El costo total de los productos es $${costoTotal.toFixed(2)}`;
}

// Función para obtener las cantidades de productos del usuario y mostrar el resultado
function calcularCosto() {
    const productos = [];
    let i = 0;
    
    while (i < 3) {
        const cantidad = parseInt(prompt(`Ingrese la cantidad deseada de Producto ${i + 1}:`)) || 0;
        productos.push(cantidad);
        i++;
    }

    const resultado = calcularCostoTotal(productos);
    alert(resultado);
}

// Llamar a la función para que el usuario ingrese las cantidades y se muestre el resultado
calcularCosto();
