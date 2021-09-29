const bcrypt = require("bcrypt");

const generatePass = (unhash_pass) => {

    if (unhash_pass.length <= 6) return;

    const salt = bcrypt.genSaltSync(12);
    const securePass = bcrypt.hashSync(unhash_pass, salt);
    return securePass;
};

module.exports = {generatePass};