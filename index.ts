import { option } from "./controller";
import { ProductController } from "./controller";
const argv = require('minimist')(process.argv.slice(2));


const terminal: option = {
    search: argv.search,
    id: argv.id
}




async function main() {
    const instanciaProdutos = new ProductController();
    const final = instanciaProdutos.processOption(terminal);
    const resultado = await final
    console.log(resultado);
}


main()

