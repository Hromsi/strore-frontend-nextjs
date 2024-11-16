'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ICategoryCreate, ICategoryUpdate } from '@/app/types/api.types';
import { CATEGORIES } from '@/app/dummy/data';
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers/localStorage';

export const categorySlice = createSlice({
	name: "category",
	initialState: {
		categories: getFromLocalStorage("categories") as ICategory[] ?? CATEGORIES,
	},
	reducers: {
		setCategories: (state, action: PayloadAction<ICategory[]>) => {
			state.categories = action.payload;
			saveToLocalStorage("categories", state.categories);
		},
		createCategory: (state, action: PayloadAction<ICategoryCreate>) => {
			const newCategory: ICategory = {
				id: Number(new Date().toISOString()),
				title: action.payload.title,
			};
			state.categories.push(newCategory);
			saveToLocalStorage("categories", state.categories);
		},
		removeCategoryById: (state, action:  PayloadAction<number>) => {
			state.categories = state.categories.filter(category => category.id !== action.payload);
			saveToLocalStorage("categories", state.categories);
		},
		updateCategoryById: (state, action:  PayloadAction<ICategoryUpdate>) => {
			let isFound = false;

			const newProducts = state.categories.map(category => {
				if (category.id === action.payload.id) {
					isFound = true;
					// If find the product then update his values
					return {
						...category,
						...action.payload
					};
				}

				return category;
			});

			if (!isFound) return console.error(`Category with id = ${action.payload.id} is not found!`);

			saveToLocalStorage("categories", newProducts);
		},
	},
});

export const { setCategories, createCategory, removeCategoryById, updateCategoryById } = categorySlice.actions;

export default categorySlice.reducer;