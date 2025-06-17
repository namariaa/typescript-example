export abstract class Lanche {
    vendidoEm: string;
    valor: number;
    feitoPor: string;
    dataProducao: string
    recheio:string
    massa:string;
    
    abstract comprar(dinheiro: number): string;

    static infosSabor(lanche: Lanche): string{
        return `A massa é de ${lanche.massa} com um recheio de ${lanche.recheio}` 
    }

    constructor(vendidoEm: string, valor: number, feitoPor: string, dataProducao: string, recheio:string, massa:string) {
        this.vendidoEm = vendidoEm;
        this.feitoPor = feitoPor;
        this.dataProducao = dataProducao;
        this.valor = valor;
        this.recheio = recheio;
        this.massa = massa;
    }
}