
import { Lanche } from "./interface";

export class Doce implements Lanche {
    vendidoEm: string;
    valor: number;
    feitoPor: string;
    dataProducao: string;
    corbetura: string;
    recheio: string;
    comprar: (dinheiro: number, valor: number) => void;

    constructor(vendidoEm: string, feitoPor: string, dataProducao: string, corbetura: string, recheio: string, comprar: (dinheiro: number, valor: number) => void, valor: number) {
        this.vendidoEm = vendidoEm;
        this.feitoPor = feitoPor;
        this.dataProducao = dataProducao;
        this.corbetura = corbetura;
        this.valor = valor;
        this.recheio = recheio;
        this.comprar = comprar;
    }

}

export class Sorvete extends Doce {
    sabor: string;
    recipiente: string;

    constructor(
        vendidoEm: string,
        feitoPor: string,
        dataProducao: string,
        corbetura: string,
        recheio: string,
        comprar: (dinheiro: number, valor: number) => void,
        valor: number,
        sabor: string,
        recipiente: string
    ) {
        super(vendidoEm, feitoPor, dataProducao, corbetura, recheio, comprar, valor);
        this.sabor = sabor;
        this.recipiente = recipiente;
    }

}