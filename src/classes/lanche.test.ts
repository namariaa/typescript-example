import { Bolo } from "./doces";
import { Empada } from "./salgados";

test("Que instancie o bolo, mostre as informções do sabor e ao fazer uma compra retorne o troco", () => {
  const bolo = new Bolo("praça", 5, "ana", "14/05/2005", "chocolate", "pão de ló", "morango");
  const infos = Bolo.infosSabor(bolo)

  expect(bolo.vendidoEm).toBe("praça");
  expect(bolo.valor).toBe(5);
  expect(bolo.feitoPor).toBe("ana");
  expect(bolo.dataProducao).toBe("14/05/2005");
  expect(bolo.recheio).toBe("chocolate");
  expect(bolo.massa).toBe("pão de ló");
  expect(bolo.cobertura).toBe("morango");
  expect(infos).toBe(
    "A massa é de pão de ló com um recheio de chocolate"
  );
  const c = bolo.comprar(7)
  expect(c).toBe("O valor troco era 2 mas como você comprou um doce, você ganhou desconto de 10% o troco ficou 2.5");
});

test("Que instancie a empada, mostre as informções do sabor e ao fazer uma compra retorne o troco", () => {
  const empada = new Empada("praça", 5, "ana", "14/05/2005", "frango", "macaxeira", "mostarda");
  const infos = Empada.infosSabor(empada)

  expect(empada.vendidoEm).toBe("praça");
  expect(empada.valor).toBe(5);
  expect(empada.feitoPor).toBe("ana");
  expect(empada.dataProducao).toBe("14/05/2005");
  expect(empada.recheio).toBe("frango");
  expect(empada.massa).toBe("macaxeira");
  expect(empada.condimento).toBe("mostarda");
  expect(infos).toBe(
    "A massa é de macaxeira com um recheio de frango"
  );
  const c = empada.comprar(7)
  expect(c).toBe("O valor do troco foi 2");
});
