import { conteudoInternet } from "../../models/Handlebars/conteudoPart.js";

export const getInternetPage = (req, res) => {
    res.render("conteudo", conteudoInternet);
};
