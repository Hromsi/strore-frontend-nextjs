'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductCreate, IProductUpdate } from '@/app/types/api.types';
import { PRODUCTS } from '@/app/dummy/data';
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers/localStorage';

export const productSlice = createSlice({
	name: "products",
	initialState: {
		products: getFromLocalStorage("products") as IProduct[] ?? PRODUCTS,
	},
	reducers: {
		setProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
			saveToLocalStorage("products", state.products);
		},
		createProduct: (state, action: PayloadAction<IProductCreate>) => {
			const newProduct: IProduct = {
				id: new Date().getTime(),
				categoryID: action.payload.categoryID,
				title: action.payload.title,
				description: action.payload.description,
				price: action.payload.price,
				imageUrl:  action.payload.imageUrl,
			};
			state.products.push(newProduct);
			saveToLocalStorage("products", state.products);
		},
		removeProductById: (state, action:  PayloadAction<number>) => {
			state.products = state.products.filter(product => product.id !== action.payload);
			saveToLocalStorage("products", state.products);
		},
		updateProductById: (state, action:  PayloadAction<IProductUpdate>) => {
			let isFound = false;

			const newProducts = state.products.map(product => {
				if (product.id === action.payload.id) {
					isFound = true;
					// If find the product then update his values
					return {
						...product,
						...action.payload
					};
				}

				return product;
			});

			if (!isFound) return console.error(`Product with id = ${action.payload.id} is not found!`);

			state.products = newProducts;
			saveToLocalStorage("products", newProducts);
		},
	},
});

export const { setProducts, createProduct, removeProductById, updateProductById } = productSlice.actions;

export default productSlice.reducer;