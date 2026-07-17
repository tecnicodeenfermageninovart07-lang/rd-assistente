const comprasService = require("../services/comprasService");

async function criarCompra(req, res) {
    try {

        const {
            descricao,
            valor,
            categoria,
            tipo,
            observacao
        } = req.body;

        const { data, error } = await comprasService.criarCompra({
            descricao,
            valor,
            categoria,
            tipo,
            observacao
        });

        if (error) {
            return res.status(500).json({
                sucesso: false,
                erro: error.message
            });
        }

        return res.status(201).json({
            sucesso: true,
            compra: data
        });

    } catch (err) {

        return res.status(500).json({
            sucesso: false,
            erro: err.message
        });

    }
}

async function listarCompras(req, res) {

    try {

        const { data, error } = await comprasService.listarCompras();

        if (error) {
            return res.status(500).json({
                sucesso: false,
                erro: error.message
            });
        }

        return res.json({
            sucesso: true,
            compras: data
        });

    } catch (err) {

        return res.status(500).json({
            sucesso: false,
            erro: err.message
        });

    }

}
async function atualizarCompra(req, res) {

    try {

        const { id } = req.params;

        const {
            descricao,
            valor,
            categoria,
            tipo,
            observacao
        } = req.body;

        const { data, error } = await comprasService.atualizarCompra(id, {
            descricao,
            valor,
            categoria,
            tipo,
            observacao
        });

        if (error) {
            return res.status(500).json({
                sucesso: false,
                erro: error.message
            });
        }

        return res.json({
            sucesso: true,
            compra: data
        });

    } catch (err) {

        return res.status(500).json({
            sucesso: false,
            erro: err.message
        });

    }

}
module.exports = {
    criarCompra,
    listarCompras,
    atualizarCompra
};