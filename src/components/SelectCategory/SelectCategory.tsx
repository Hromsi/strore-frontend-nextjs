"use client";

import { useAppSelector } from "@/services/store/hooks";
import Select, { SelectProps } from "@/components/ui/Select/Select";
import { getCategoryOptions } from "@/services/helpers/options/getOptions";

export default function SelectCategory({...props }: Omit<SelectProps, "options">) {
    const categories = useAppSelector((state) => state.categories.categories);
    const categoryOptions = getCategoryOptions(categories);

    return (
        <Select options={categoryOptions} placeholder="Select category" {...props}/>
    );
}
