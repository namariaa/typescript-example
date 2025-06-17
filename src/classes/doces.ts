import { Lanche } from "./interface";

export class Bolo extends Lanche {
    cobertura:string;

    comprar(dinheiro: number): string {
        return `O valor troco era ${dinheiro - this.valor} mas como você comprou um doce, você ganhou desconto de 10% o troco ficou ${dinheiro - (this.valor - (this.valor / 10))}`;
    }
    constructor(vendidoEm: string,  valor: number, feitoPor: string, dataProducao: string, recheio: string, massa: string, cobertura:string) {
        super(vendidoEm, valor, feitoPor, dataProducao, recheio, massa);
        this.cobertura = cobertura;
    }

}
