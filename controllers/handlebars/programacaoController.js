import { conteudoProgramacao } from "../../models/Handlebars/conteudoPart.js";

export const getProgramacaoPage = (req, res) => {
    res.render("conteudo", conteudoProgramacao);
};
