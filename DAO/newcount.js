import conexao from './conexao.js';

export function criarConta(app, encoder) {
    app.post("/newcount", encoder, async (req, res) => {
        var usuario = req.body.usuario;
        var email = req.body.email;
        var password = req.body.password;

    conexao.query("INSERT INTO loginuser (user_name, user_email, user_pass) VALUES (?, ?, ?);", [usuario, email, password], (err, results) => {
        if (err) {
            console.error("Erro na consulta ao banco de dados:", err)
            callback(err, null); // Retorna o erro
            return;
        }

        // Verifica se "results" está definido e possui resultados
        else {
            req.session.usuario = usuario;
            req.session.email = email;
            res.redirect("/personagem");
            console.log("Criado nova conta");
        } 
        res.end();
    });
    
    });
}
