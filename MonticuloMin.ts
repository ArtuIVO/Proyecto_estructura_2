import { Venta } from './Orden';

export class MonticuloMin {
    private heap: Venta[] = [];

    insertar(orden: Venta) {
        console.log('Insertando en MontículoMin:', orden);
        this.heap.push(orden);
        this.subir(this.heap.length - 1);
    }

    extraerMinimo(): Venta | undefined {
        console.log('Extrayendo mínimo en MontículoMin:', this.heap[0]);
        const min = this.heap[0];
        const fin = this.heap.pop();
        if (this.heap.length > 0 && fin) {
            this.heap[0] = fin;
            this.bajar(0);
        }
        return min;
    }

    private subir(index: number) {
        const elemento = this.heap[index];
        while (index > 0) {
            const padreIndex = Math.floor((index - 1) / 2);
            const padre = this.heap[padreIndex];
            if (elemento.precio >= padre.precio) break;
            this.heap[index] = padre;
            index = padreIndex;
        }
        this.heap[index] = elemento;
    }

    private bajar(index: number) {
        const length = this.heap.length;
        const elemento = this.heap[index];

        while (true) {
            let izqIndex = 2 * index + 1;
            let derIndex = 2 * index + 2;
            let menor = index;

            if (izqIndex < length && this.heap[izqIndex].precio < this.heap[menor].precio) {
                menor = izqIndex;
            }

            if (derIndex < length && this.heap[derIndex].precio < this.heap[menor].precio) {
                menor = derIndex;
            }

            if (menor === index) break;

            this.heap[index] = this.heap[menor];
            index = menor;
        }

        this.heap[index] = elemento;
    }
}
