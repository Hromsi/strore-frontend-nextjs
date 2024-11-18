"use client";

import { useState } from "react";
import { removeCategoryById } from "@/app/services/store/slices/categorySlice";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch } from "@/app/services/store/hooks";

interface IDeleteCategoryOptions {
    onSuccess?: () => void;
    onError?: () => void;
}

export const useDeleteCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    let isError = false;
    const dispatch = useAppDispatch();
    const toast = useToast();

    const deleteCategoryQuery = async (categoryID: number, options?: IDeleteCategoryOptions ) => {
        try {
            setIsLoading(true);
            
            if (!categoryID) {
                throw Error("Field categoryID is required!");
            }

            dispatch(removeCategoryById(categoryID));

            toast({
                title: "Category delete result",
                description: `The Category with ID: ${categoryID} successfully deleted!`,
                status: "success",
                position: "top-right",
                isClosable: true
            });

            options?.onSuccess?.();
        } catch (error) {
            console.error(error);

            toast({
                title: `Category with ID: ${categoryID} delete result`,
                description: "Something went wrong!",
                status: "error",
                position: "top-right",
                isClosable: true
            });
            isError = true;
            options?.onError?.();
        } finally {
            setIsLoading(false);
        };
    };

    return [deleteCategoryQuery, { isLoading, isError }] as const;
};
