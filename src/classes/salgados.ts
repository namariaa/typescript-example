import { Lanche } from "./interface";

export class Salgado implements Lanche {
    vendidoEm: string;
    valor: number;
    feitoPor: string;
    dataProducao: string
    massa: string;
    comprar: (dinheiro: number, valor: number) => void;

    constructor(vendidoEm: string, feitoPor: string, dataProducao: string, comprar: (dinheiro: number, valor: number) => void, valor: number, massa: string) {
        this.vendidoEm = vendidoEm;
        this.feitoPor = feitoPor;
        this.dataProducao = dataProducao;
        this.valor = valor;
        this.comprar = comprar;
        this.massa = massa;
    }
}


export class Empada extends Salgado {
    sabor: string;
    constructor(vendidoEm: string, feitoPor: string, dataProducao: string, comprar: (dinheiro: number, valor: number) => void, valor: number, massa: string, sabor: string,) {
        super(vendidoEm, feitoPor, dataProducao, comprar, valor, massa);
        this.sabor = sabor;

    }

}