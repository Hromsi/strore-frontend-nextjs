'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/app/types/api.types';
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers/localStorage';
import { ICartItem, IProductCart } from '@/app/types/index.types';

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: getFromLocalStorage("cart") as ICartItem ?? {
			products: [],
			totalProducts: 0
		},
	},
	reducers: {
		setCart: (state, action: PayloadAction<ICartItem>) => {
			state.cart = action.payload;
			saveToLocalStorage("cart", state.cart);
		},
		addProductToCart: (state, action: PayloadAction<IProduct>) => {
			let isNotHaveThisProductInCart = true;

			// If a product with the same ID is found in the cart,
			// add a new instance of that product to it.
			state.cart.products = state.cart.products.map(product => {
				if (product.id === action.payload.id) {
					isNotHaveThisProductInCart = false;
					return {
						...product,
						total: product.total + 1
					};
				}

				return product;
			})

			// If no matching product is found (i.e., this is a new product),
			// add it to the cart with an initial quantity of 1.
			if (isNotHaveThisProductInCart) {
				state.cart.products.push({
					...action.payload,
					total: 1
				});
			}

			// Update the totalProducts count in the cart state
			state.cart = {
				...state.cart,
				totalProducts: state.cart.totalProducts + 1
			};

			saveToLocalStorage("cart", state.cart);
		},
		removeOneProductFromCartById: (state, action: PayloadAction<number>) => {
			state.cart.products = state.cart.products.map(product => {
				if (product.id === action.payload) {
					if (product.total === 1) {
						return null;
					}

					return {
						...product,
						total: product.total - 1
					};
				}

				return product;
			}).filter(Boolean) as IProductCart[];

			state.cart = {
				...state.cart,
				totalProducts: state.cart.totalProducts - 1
			};

			saveToLocalStorage("cart", state.cart);
		},
		addOneProductToCartById: (state, action: PayloadAction<number>) => {
			state.cart.products = state.cart.products.map(product => {
				if (product.id === action.payload) {

					return {
						...product,
						total: product.total + 1
					};
				}

				return product;
			});

			state.cart = {
				...state.cart,
				totalProducts: state.cart.totalProducts + 1
			};

			saveToLocalStorage("cart", state.cart);
		},
		removeProductFromCartById: (state, action: PayloadAction<number>) => {
			state.cart.products = state.cart.products.filter(product => {
				if (product.id === action.payload) {
					const newTotalProduct = state.cart.totalProducts - product.total;
					state.cart.totalProducts = newTotalProduct >= 0 ? newTotalProduct : 0;

					return false;
				}

				return true;
			});

			saveToLocalStorage("cart", state.cart);
		}
	},
});

export const {
	setCart,
	addProductToCart,
	removeProductFromCartById,
	removeOneProductFromCartById,
	addOneProductToCartById
} = cartSlice.actions;

export default cartSlice.reducer;