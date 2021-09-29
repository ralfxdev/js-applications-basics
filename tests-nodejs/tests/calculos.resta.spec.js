const {resta} = require("../controllers/calculos");

describe('Pruebas Funcion Resta', () => {
    
    test('Debería restar dos números ', () => {
        const actual = resta(3,2);
        expect(actual).toBe(1);
    })  
})