import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import bodyParser from "body-parser";
import fs from "fs";

import { autenticarUsuario } from './DAO/login.js';
import { app } from './DAO/login.js';
import { criarConta } from './DAO/newcount.js';
import { updatePersonagem } from './DAO/updatePersonagem.js';

import { fileURLToPath } from 'url';
import defineRoutes from "./controllers/rotas.js";



import { getCyberPage } from "./controllers/handlebars/cyberController.js";
import { getInternetPage } from './controllers/handlebars/internetController.js';
import { getProgramacaoPage } from './controllers/handlebars/programacaoController.js';
import { getLogicaPage } from './controllers/handlebars/logicaController.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const encoder = bodyParser.urlencoded({ extended: true });



const hbs = exphbs.create({
  partialsDir: ["views/partials"]
});  

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");



app.use(express.static('public'));


autenticarUsuario(app, encoder);
criarConta(app, encoder);
updatePersonagem(app, encoder);

defineRoutes(app, __dirname);

// Partials
app.get('/cybersecurity', getCyberPage);
app.get('/internet', getInternetPage);
app.get('/programacao', getProgramacaoPage);
app.get('/logica', getLogicaPage);

app.listen(3000, ()=>{console.log("Funcionando: Parabens mereçe um MB")})


// Feito por Barbara Samira e Rebeca Pimentel