import { Doce, Sorvete } from "./doces";
import { Empada, Salgado } from "./salgados";

test("Que a compra desconte 5 reais do valor e instancie todos os valores", () => {
    const comprar = jest.fn((dinheiro: number, valor: number) => {
        expect(dinheiro - valor).toBe(10);
    });
    const coxinha = new Salgado("padaria", "ana", "14/05/2005", comprar, 15, "macaxeira")
    expect(coxinha.vendidoEm).toBe("padaria");
    expect(coxinha.feitoPor).toBe("ana");
    expect(coxinha.dataProducao).toBe("14/05/2005");
    expect(coxinha.valor).toBe(15);
    expect(coxinha.massa).toBe("macaxeira");
})


test("Que a compra desconte 5 reais do valor e instancie todos os valores", () => {
    const comprar = jest.fn((dinheiro: number, valor: number) => {
        expect(dinheiro - valor).toBe(10);
    });
    const bolo = new Doce("padaria", "ana", "14/05/2005", "ninho", "brigadeiro", comprar, 15)
    expect(bolo.vendidoEm).toBe("padaria");
    expect(bolo.feitoPor).toBe("ana");
    expect(bolo.dataProducao).toBe("14/05/2005");
    expect(bolo.valor).toBe(15);
    expect(bolo.recheio).toBe("brigadeiro");
    expect(bolo.corbetura).toBe("ninho");
})

test("Que a compra desconte 5 reais do valor e instancie todos os valores do sorvete", () => {
    const comprar = jest.fn((dinheiro: number, valor: number) => {
        expect(dinheiro - valor).toBe(10);
    });

    const sorvete = new Sorvete("praça", "ana", "14/05/2005", "chocolate", "morango", comprar, 5, "morango", "casquinha");

    expect(sorvete.vendidoEm).toBe("praça");
    expect(sorvete.feitoPor).toBe("ana");
    expect(sorvete.dataProducao).toBe("14/05/2005");
    expect(sorvete.corbetura).toBe("chocolate");
    expect(sorvete.recheio).toBe("morango");
    expect(sorvete.valor).toBe(5);
    expect(sorvete.sabor).toBe("morango");
    expect(sorvete.recipiente).toBe("casquinha");
});


test("Que a compra desconte 5 reais do valor e instancie todos os valores da empada", () => {
    const comprar = jest.fn((dinheiro: number, valor: number) => {
        expect(dinheiro - valor).toBe(10);
    });

    const empada = new Empada("padaria central", "ana", "14/05/2005", comprar, 5, "massa podre", "frango");

    expect(empada.vendidoEm).toBe("padaria central");
    expect(empada.feitoPor).toBe("ana");
    expect(empada.dataProducao).toBe("14/05/2005");
    expect(empada.valor).toBe(5);
    expect(empada.massa).toBe("massa podre");
    expect(empada.sabor).toBe("frango");
});