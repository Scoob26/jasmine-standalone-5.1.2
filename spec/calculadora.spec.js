describe("Teste Calculadora", function () {
    it("Somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
    });
    it("Subtrações válidas", function () {
        expect(subtracao(3, 1)).toBe(2);
        expect(subtracao(9, 3)).toBe(6);
    });
    it("multiplicações válidas", function () {
        expect(multiplicacao(4, 1)).toBe(4);
        expect(multiplicacao(3, 1 )).toBe(3);
    });
    it("divisões válidas", function () {
        expect(divisao(4, 2)).toBe(2);
        expect(divisao(5, 1)).toBe(5);
    });

});

 