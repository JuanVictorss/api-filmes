import express from "express";
import filmesRouter from "./routes/filmes.js";

const app = express();

app.use(express.json())
app.use(filmesRouter)

app.listen(8000, () => console.log("Porta 8000..."))