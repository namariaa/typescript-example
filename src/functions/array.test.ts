import { concatena, ordena, pares, quadradoEach, quadradoSimple, slice } from "./arrays";

test("Que o quadrado de [3,5,7,3,8,9,1] no for normal seja [9,25,49,9,64,81,1]", () => {
    expect(quadradoSimple([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
})

test("Que o quadrado de [] lance excessão", () => {
    expect(quadradoSimple([])).toThrowErrorMatchingInlineSnapshot("Não existem elementos para fazer o quadrado dos números");
})

test("Que o quadrado de [3,5,7,3,8,9,1] no for each seja [9,25,49,9,64,81,1]", () => {
    expect(quadradoEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
})

test("Que o quadrado de [] lance excessão", () => {
    expect(quadradoEach([])).toThrowErrorMatchingInlineSnapshot("Não existem elementos para fazer o quadrado dos números");
})

test("Que o array  ['Arrays', 'com', 'TypeScript'] retorne 'Arrays com TypeScript'", () => {
    expect(concatena(['Arrays', 'com', 'TypeScript'])).toBe("Arrays com TypeScript ");
})

test("Que o [] lance uma excessão", () => {
    expect(concatena([])).toThrowErrorMatchingInlineSnapshot("Não existem elementos para fazer a concatenação");
})

test("Que o array  ['carro', 'boneco', 'ave', 'lapis'] retorne['ave', 'boneco', 'carro', 'lapis']", () => {
    expect(ordena(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['ave', 'boneco', 'carro', 'lapis']);
})

test("Que o [] lance uma excessão", () => {
    expect(ordena([])).toThrowErrorMatchingInlineSnapshot("Não existem elementos para ordenar");
})

test("Que o array  [2,4,6,2,8,9,5] retorne [2,4]", () => {
    expect(slice([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
})

test("Que o [] lance uma excessão", () => {
    expect(slice([])).toThrowErrorMatchingInlineSnapshot("Não existem elementos para fazer a cópia");
})

test("Que o array [8, 3, 9, 5, 6, 12] retorne [3, 9, 5]", () => {
    expect(pares([8, 3, 9, 5, 6, 12])).toEqual([3, 9, 5]);
})

test("Que o [] lance uma excessão", () => {
    expect(pares([])).toThrowErrorMatchingInlineSnapshot("Não existem elementos para filtrar");
})

