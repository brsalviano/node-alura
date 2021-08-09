//Nesta aula o arquivo index.js foi reorganizado para
//apenas instânciar e subir o servidor

//Separamos a configuração do express em um arquivo dentro da pasta config:
const customExpress = require("./config/customExpress");

//A instância gerada e devolvida por customExpress 
//já contém configurações de rotas do express
const app = customExpress();

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));