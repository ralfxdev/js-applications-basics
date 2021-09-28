const {suma} = require('../controllers/calculos.js')

test ("Debería sumar dos números positivos", () => {
    const actual = suma(1,3);
    expect(actual).toEqual(4);
});

test("Debería sumar dos números negativos", () =>{
    const actual = suma(-4,-5);
    expect(actual).toBe(-9);
});