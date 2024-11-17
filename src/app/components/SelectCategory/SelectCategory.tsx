"use client";

import { useAppSelector } from "@/app/services/store/hooks";
import Select, { SelectProps } from "../ui/Select/Select";
import { getCategoryOptions } from "@/app/services/helpers/options/getOptions";

export default function SelectCategory({...props }: Omit<SelectProps, "options">) {
    const categories = useAppSelector((state) => state.categories.categories);
    const categoryOptions = getCategoryOptions(categories);

    return (
        <Select options={categoryOptions} placeholder="Select category" {...props}/>
    );
}
