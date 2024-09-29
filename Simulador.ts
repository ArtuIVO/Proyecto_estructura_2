import { Compra, Venta } from './Orden';
import { MonticuloMax } from './MonticuloMax';
import { MonticuloMin } from './MonticuloMin';

export class Simulador {
    private compras = new MonticuloMax();
    private ventas = new MonticuloMin();
    private historial: { compania: string, cantidad: number, precio: number }[] = [];

    agregarCompra(compra: Compra) {
        this.compras.insertar(compra);
    }

    agregarVenta(venta: Venta) {
        this.ventas.insertar(venta);
    }

    procesarTransacciones() {
        let compra = this.compras.extraerMaximo();
        let venta = this.ventas.extraerMinimo();

        while (compra && venta && compra.precio >= venta.precio) {
            console.log('Procesando transacción entre:', compra, 'y', venta); 
            const cantidadTransaccion = Math.min(compra.cantidad, venta.cantidad);
            const precioTransaccion = (compra.precio + venta.precio) / 2;

            this.historial.push({
                compania: compra.compania,
                cantidad: cantidadTransaccion,
                precio: precioTransaccion,
            });

            compra.cantidad -= cantidadTransaccion;
            venta.cantidad -= cantidadTransaccion;

            if (compra.cantidad > 0) {
                this.compras.insertar(compra);}
            if (venta.cantidad > 0){
                 this.ventas.insertar(venta);}

            compra = this.compras.extraerMaximo();
            venta = this.ventas.extraerMinimo();
        }
    }

    verHistorial() {
        return this.historial;
    }
}
