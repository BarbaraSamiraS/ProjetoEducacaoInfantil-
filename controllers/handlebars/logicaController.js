import { conteudoLogica } from "../../models/Handlebars/conteudoPart.js";

export const getLogicaPage = (req, res) => {
    res.render("conteudo", conteudoLogica);
};
