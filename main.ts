import { Simulador } from './Simulador';
import { Compra, Venta } from './Orden';

const simulador = new Simulador();

simulador.agregarCompra(new Compra('Empresa A', 100, 50));
simulador.agregarVenta(new Venta('Empresa A', 50, 45));
simulador.agregarVenta(new Venta('Empresa A', 100, 55));
simulador.agregarCompra(new Compra('Empresa B', 200, 60));

console.log('Historial de transacciones:');
console.log(simulador.verHistorial());
