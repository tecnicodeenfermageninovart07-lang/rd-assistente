const comprasRepository = require("../repositories/comprasRepository");

async function criarCompra(compra) {
    return await comprasRepository.criar(compra);
}

async function listarCompras() {
    return await comprasRepository.listar();
}
async function atualizarCompra(id, compra) {
    return await comprasRepository.atualizar(id, compra);
}
module.exports = {
    criarCompra,
    listarCompras,
    atualizarCompra
};