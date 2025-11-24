const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const posts = [
  {
    title: "CIAMBELLOONEEE",
    image: "/images/ciambellone.jpeg",
    tags: ["dolci"],
  },

  {
    title: "CRACKER BARBABIETOLA",
    image: "/images/cracker-barbabietola.jpeg",
    tags: ["salati"],
  },
  {
    title: "PANE FRITTO DOLCE",
    image: "/images/pane-fritto-dolce.jpeg",
    tags: ["dolci"],
  },

  {
    title: "PASTA BARBABIETOLA",
    image: "/images/pasta-barbabietola.jpeg",
    tags: ["salati"],
  },

  {
    title: "TORTA PAESANA",
    image: "/images/torta-paesana.jpeg",
    tags: ["dolci"],
  },
];

// inizio a scrivere la rotta pricipalke

app.get("/", (req, res) => {
  res.send("My blog Server");
});

app.listen(PORT, () => {
  console.log(`Blog server starts at http://localhost:${PORT}`);
});
