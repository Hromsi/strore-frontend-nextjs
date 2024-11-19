import { IProduct } from "@/types/api.types";

export type Maybe<T> = T | null | undefined;

export type TOption = {
    value: Maybe<number>;
    label: Maybe<string>;
};

export type HeaderElement = {
    id: number;
    title: string;
};

export interface IProductCart extends IProduct {
    total: number;
}

export interface ICartItem {
    products: IProductCart[];
    totalProducts: number;
}