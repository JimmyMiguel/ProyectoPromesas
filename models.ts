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

    getAll() {
        const promesa = jsonfile.readFile(__dirname + '/products.json').then(
            (porductosJson) => {
                this.productsTotal = porductosJson;
                return this.productsTotal;
            })
        return promesa
    }

    getById(id: number) {
        return this.getAll().then(
            () => {
                return this.productsTotal.find(productSearch => productSearch.id === id)
            })
    }
}

export { Product, ProductCollection }