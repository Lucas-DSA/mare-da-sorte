const express = require("express");
const cors = require("cors");
const { calcularPrecoPrazo } = require("correios-brasil");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/frete", async (req, res) => {
  const { cepDestino } = req.body;
  const args = {
    sCepOrigem: "01001000",
    sCepDestino: cepDestino,
    nVlPeso: "1",
    nCdFormato: "1",
    nVlComprimento: "20",
    nVlAltura: "10",
    nVlLargura: "15",
    nCdServico: ["04510"],
    nVlDiametro: "0",
    sCdMaoPropria: "N",
    nVlValorDeclarado: "0",
    sCdAvisoRecebimento: "N"
  };
  try {
    const response = await calcularPrecoPrazo(args);
    res.json(response[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao calcular frete." });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));