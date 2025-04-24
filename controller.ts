import { ProductCollection } from "./models";

export type option = {
    search:string,
    id: number
}

export class ProductController {
    productosController: ProductCollection;

    constructor() {
        this.productosController = new ProductCollection()
    }

    processOption(option: option) {

        if (option.search === "search" && typeof option.id === "number") {
            return this.productosController.getById(option.id)
        }
        if (option.search === "search") {
            return this.productosController.getAll()
        }
    }

}