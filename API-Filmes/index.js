
const express = require("express");

const app = express();

app.use(express.json());

let filmes = [
    { id: 1, nome: "Vingadores: Ultimato", genero: "Ação", ano: 2019, diretor: "Anthony Russo" },
    { id: 2, nome: "Interestelar", genero: "Ficção Científica", ano: 2014, diretor: "Christopher Nolan" },
    { id: 3, nome: "Titanic", genero: "Romance", ano: 1997, diretor: "James Cameron" },
    { id: 4, nome: "Homem-Aranha", genero: "Aventura", ano: 2002, diretor: "Sam Raimi" },
    { id: 5, nome: "O Rei Leão", genero: "Animação", ano: 1994, diretor: "Roger Allers" }
];


app.get("/itens", (req, res) => {
    res.status(200).json(filmes);
});

app.get("/itens/:id", (req, res) => {
    const id = Number(req.params.id);

    const filme = filmes.find(item => item.id === id);

    if (!filme) {
        return res.status(404).json({
            erro: "Item não encontrado"
        });
    }

    res.status(200).json(filme);
});

app.delete("/itens/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = filmes.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: "Item não encontrado"
        });
    }

    filmes.splice(indice, 1);

    res.status(204).send();
});

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000");
});

