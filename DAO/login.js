import express from 'express';
import session from 'express-session';
import conexao from './conexao.js';

const app = express();

// Configuração do middleware de sessão - deve vir antes das rotas
app.use(session({
    secret: 'chave-secreta', // Substitua por algo seguro
    resave: false,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };

export function autenticarUsuario(app, encoder) {
    app.post("/login", encoder, async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    conexao.query("select * from loginuser where user_email = ? and user_pass = ?", [username, password], function(error, results, fields) {
        if (error) {
            console.error("Erro na consulta ao banco de dados:", error); // Exibe o erro no console para análise
            res.redirect("/login"); // Redireciona o usuário em caso de erro
            res.end();
            return;
        }

        // Verifica se "results" está definido e possui resultados
        if (results && results.length > 0) {
            const nome = results[0].user_name;
            const person = results[0].user_personagem;
            req.session.nome = nome;
            req.session.person = person;
            res.redirect("/cursos");
        } else {
            res.redirect("/login");
        }
        res.end();
    });
    });
}
