import { option } from "./controller";
import { ProductController } from "./controller";
const argv = require('minimist')(process.argv.slice(2));


const terminal: option = {
    search: argv.search,
    id: argv.id
}




function main() {
    const instanciaProdutos = new ProductController();

    const final = instanciaProdutos.processOption(terminal);
    final?.then(
        (productos)=>{
            console.log(productos)

        }
    )
}


main()

