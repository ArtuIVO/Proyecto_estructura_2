import { Compra } from './Orden';

export class MonticuloMax {
    private heap: Compra[] = [];

    insertar(orden: Compra) {
        console.log('Insertando en MontículoMax:', orden);
        this.heap.push(orden);
        this.subir(this.heap.length - 1);
    }

    extraerMaximo(): Compra | undefined {
        console.log('Extrayendo máximo en MontículoMax:', this.heap[0]); 
        const max = this.heap[0];
        const fin = this.heap.pop();
        if (this.heap.length > 0 && fin) {
            this.heap[0] = fin;
            this.bajar(0);
        }
        return max;
    }

    private subir(index: number) {
        const elemento = this.heap[index];
        while (index > 0) {
            const padreIndex = Math.floor((index - 1) / 2);
            const padre = this.heap[padreIndex];
            if (elemento.precio <= padre.precio) break;
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
            let mayor = index;

            if (izqIndex < length && this.heap[izqIndex].precio > this.heap[mayor].precio) {
                mayor = izqIndex;
            }

            if (derIndex < length && this.heap[derIndex].precio > this.heap[mayor].precio) {
                mayor = derIndex;
            }

            if (mayor === index) break;

            this.heap[index] = this.heap[mayor];
            index = mayor;
        }

        this.heap[index] = elemento;
    }
}
