import { conteudoCyber } from "../../models/Handlebars/conteudoPart.js";

export const getCyberPage = (req, res) => {
    res.render("conteudo", conteudoCyber);
};
