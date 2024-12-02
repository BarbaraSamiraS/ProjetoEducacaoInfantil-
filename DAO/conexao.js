import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "nodejs"
});

conexao.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    } else {
        console.log(";)");
    }
});

export default conexao;
