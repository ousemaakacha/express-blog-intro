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
    image: "/images/cracker_barbabietola.jpeg",
    tags: ["salati"],
  },
  {
    title: "PANE FRITTO DOLCE",
    image: "/images/pane_fritto_dolce.jpeg",
    tags: ["dolci"],
  },

  {
    title: "PASTA BARBABIETOLA",
    image: "/images/pasta_barbabietola.jpeg",
    tags: ["salati"],
  },

  {
    title: "TORTA PAESANA",
    image: "/images/torta_paesana.jpeg",
    tags: ["dolci"],
  },
];

// inizio a scrivere la rotta pricipalke

app.get("/", (req, res) => {
  res.send("My blog Server");
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Blog server starts at http://localhost:${PORT}`);
});
