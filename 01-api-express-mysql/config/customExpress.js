const express = require("express");
const consign = require("consign");

module.exports = () => {

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //Com o consign, conseguimos automatizar o carregamento
    //de scripts de uma pasta. No caso, controllers
    consign()
        .include("controllers")
        .into(app);

    return app;
}