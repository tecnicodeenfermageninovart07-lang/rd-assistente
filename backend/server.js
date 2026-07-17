require("dotenv").config();

const express = require("express");
const cors = require("cors");

const comprasRoutes = require("./routes/comprasRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        sistema: "RD Assistente",
        status: "online",
        versao: "1.0.0"
    });
});

app.use("/compras", comprasRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 RD Assistente rodando na porta ${PORT}`);
});