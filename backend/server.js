const express = require("express");
const cors = require("cors");
const supabase = require("./config/supabase");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        sistema: "RD Assistente",
        status: "online"
    });
});


app.get("/teste-supabase", async (req, res) => {

    const { data, error } = await supabase
        .from("usuarios")
        .select("*");

    if (error) {
        return res.status(500).json({
            erro: error.message
        });
    }

    res.json({
        conectado: true,
        dados: data
    });
});

app.post("/compras", async (req, res) => {

    const {
        descricao,
        valor,
        categoria,
        tipo,
        observacao
    } = req.body;


    const { data, error } = await supabase
        .from("compras")
        .insert([
            {
                descricao,
                valor,
                categoria,
                tipo,
                observacao
            }
        ])
        .select();


    if (error) {
        return res.status(500).json({
            erro: error.message
        });
    }


    res.json({
        sucesso: true,
        compra: data
    });

});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`RD Assistente rodando na porta ${PORT}`);
});