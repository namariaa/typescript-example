export interface Lanche {
    vendidoEm: string;
    feitoPor: string;
    dataProducao: string;
    comprar(dinheiro: number, valor: number): void;
    valor: number;
}