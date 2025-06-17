export function quadradoSimple(a: number[]) {
    var quadrados = []
    if (a.length > 0) {
        for (var i = 0; i < a.length; i++) {
            quadrados[i] = a[i] * a[i];
        }
        return quadrados;
    }
    else {
        throw new Error("Não existem elementos para fazer o quadrado dos números");
    }
}

export function quadradoEach(a: number[]) {
    var quadrados: number[] = []
    var cont = 0;
    if (a.length > 0) {
        a.forEach((numbers) => {
            quadrados[cont] = numbers * numbers;
            cont++;
        })

        return quadrados;
    }
    else {
        throw new Error("Não existem elementos para fazer o quadrado dos números");
    }
}

export function concatena(s: any[]) {
    var frase = ""
    if (s.length > 0) {
        for (var i = 0; i < s.length; i++) {
            frase += s[i];
            frase += " ";
        }
        return frase;
    }
    else {
        throw new Error("Não existem elementos para fazer a concatenação");
    }
}

export function ordena(a: any[]) {
    if (a.length > 0) {
        return a.sort();
    }
    else {
        throw new Error("Não existem elementos para ordenar");
    }
}

export function slice(a: any[]) {
    if (a.length > 0) {
        return a.slice(0, 2);
    }
    else {
        throw new Error("Não existem elementos para fazer a cópia");
    }
}

export function pares(a: number[]) {
    if (a.length > 0) {
        return a.filter((elemento) => elemento % 2 == 1);
    }
    else {
        throw new Error("Não existem elementos para filtrar");
    }
}