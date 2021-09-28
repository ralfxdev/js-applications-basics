const {generatePass} = require("../controllers/pass");

describe('Pruebas sobre Funcion generatePass', () => {
    it("Debe generar constraseñas diferentes", () => {
        const pruebaPass = "Hello123";
        const pass1 = generatePass(pruebaPass);
        const pass2 = generatePass(pruebaPass);
        expect(pass1).not.toBe(pass2);
    });
    
    it("La contraseña debe tener como minimo 6 caracteres", () => {
        const pruebaPass = "Hello";
        const pass1 = generatePass(pruebaPass);
        expect(pass1).toBeUndefined();
        
    });
});
