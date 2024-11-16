import { ICategory } from "@/app/types/api.types";
import { Maybe, TOption } from "@/app/types/index.types";

export const getCategoryOptions = (categories: Maybe<ICategory[]>): TOption[] => categories?.map((category) => ({ value: category.id, label: category.title })) ?? [];
