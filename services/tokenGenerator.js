const generateToken = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let cadena = '';
    for (let i = 0; i < 40; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        cadena += caracteres[indice];
    }
    return cadena;
}

module.exports = generateToken