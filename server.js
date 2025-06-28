const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serves your frontend

app.post("/calculate", (req, res) => {
  const { transport, electricity, meals } = req.body;
  const emission = (transport * 0.21) + (electricity * 0.5) + (meals * 2.5);
  res.json({ emission: emission.toFixed(2) });
});

app.listen(PORT, () => {
  console.log(`🌍 EcoTracker server running at http://localhost:${PORT}`);
});
