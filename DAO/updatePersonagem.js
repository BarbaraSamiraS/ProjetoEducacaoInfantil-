import conexao from './conexao.js';

export function updatePersonagem(app, encoder) {
    app.post("/atualizarPersonagem", encoder, async (req, res) => {
        const { personagem } = req.body;
        var usuario = req.session.usuario;
        var email = req.session.email;

    conexao.query("UPDATE loginuser SET user_personagem = ? WHERE user_email = ? AND user_name = ?;", [personagem, email, usuario], (err, results) => {
        if (err) {
            console.error("Erro na consulta ao banco de dados:", err)
            callback(err, null); // Retorna o erro
            return;
        }

        // Verifica se "results" está definido e possui resultados
        else if (results){
            req.session.nome = usuario;
            req.session.person = personagem;
            res.redirect("/cursos");

        } else {
            res.redirect("/");
            console.log(usuario);
        }

        res.end();
    });
    
    });
}
