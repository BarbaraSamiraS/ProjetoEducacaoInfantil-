import fs from "fs";
import path from "path";
import session from 'express-session';


// Handlebars JSON
import { getPersonagens } from "../models/personagem.js";
import { getInicial } from "../models/inicial.js";
import { getLoginDados } from "../models/login.js";
import { getAllCursos } from "../models/cursos.js"; 


export default function defineRoutes(app, __dirname) {
    app.get("/", (req, res) => {
        const inicialDados = getInicial();
        res.render("inicial", {inicialDados});
    });

    app.get("/login", (req, res) => {
        const loginDados = getLoginDados(); 
        res.render("login", {loginDados});
    });

    app.get("/personagem", (req, res) => {
        const personagens = getPersonagens();
        const usuario = req.session.usuario;
        const email = req.session.email;
        

        if (!usuario ) {
            return res.redirect("/login"); 
            
        }

        if (!email) {
            return res.redirect("/login"); 
            
        }
            res.render("personagem", { personagens, usuario, email });
    });
    app.get("/cursos", (req, res) => {
        const cursoDados = getAllCursos();
        const nome = req.session.nome;
        const person = req.session.person;

        if (!nome || !person) {
            return res.redirect("/login");
        }
        res.render("cursos", { cursoDados, nome, person });
    });


    

}
