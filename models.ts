import * as jsonfile from 'jsonfile'

class Product {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class ProductCollection {
    productsTotal: Product[] = [];

    getAll = async()=> {
        const productsJson = await jsonfile.readFile(__dirname + '/products.json');
        this.productsTotal = productsJson;
        return this.productsTotal
    }

    getById = async (id:number)=> {
        const productsid = await this.getAll()
        return productsid.find(productSearch => productSearch.id === id);

    }
}
export { Product, ProductCollection }