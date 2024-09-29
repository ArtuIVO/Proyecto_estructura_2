export class Orden {
    constructor(
        public compania: string,
        public cantidad: number,
        public precio: number
    ) {}
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
