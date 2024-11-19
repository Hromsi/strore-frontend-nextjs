import { ICategory } from "@/types/api.types";
import { Maybe, TOption } from "@/types/index.types";

export const getCategoryOptions = (categories: Maybe<ICategory[]>): TOption[] => categories?.map((category) => ({ value: category.id, label: category.title })) ?? [];
