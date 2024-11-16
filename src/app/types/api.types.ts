export interface IProduct {
    id: number,
    categoryID: number,
    title: string,
    description: string,
    price: number,
    imageUrl: string
}

export interface IProductCreate extends Omit<IProduct, "id"> {}

export interface IProductUpdate extends Partial<Omit<IProduct, "id">> {
    id: number
}
