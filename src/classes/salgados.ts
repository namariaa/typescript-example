import { Lanche } from "./interface";

export class Empada extends Lanche {
    condimento:string;

    comprar(dinheiro: number): string {
        return `O valor do troco foi ${dinheiro - this.valor}`;
    }
    constructor(vendidoEm: string,  valor: number, feitoPor: string, dataProducao: string, recheio: string, massa: string, condimento:string) {
        super(vendidoEm, valor, feitoPor, dataProducao, recheio, massa);
        this.condimento = condimento;
    }

}
