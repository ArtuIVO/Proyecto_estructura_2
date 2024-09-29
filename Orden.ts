export class Orden {
    constructor(
        public compania: string,
        public cantidad: number,
        public precio: number
    ) {
        if (cantidad <= 0) {
            throw new Error('La cantidad debe ser mayor que 0');
        }
        if (precio <= 0) {
            throw new Error('El precio debe ser mayor que 0');
        }
}
}

export class Compra extends Orden {
    constructor(compania: string, cantidad: number, precio: number) {
        super(compania, cantidad, precio);
    }
}

export class Venta extends Orden {
    constructor(compania: string, cantidad: number, precio: number) {
        super(compania, cantidad, precio);
    }
}
