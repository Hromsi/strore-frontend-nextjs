"use client";

import { useState } from "react";
import { updateCategoryById } from "@/app/services/store/slices/categorySlice";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch } from "@/app/services/store/hooks";

interface IUpdateCategoryOptions {
    onSuccess?: () => void;
    onError?: () => void;
}

export const useUpdateCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    let isError = false;
    const dispatch = useAppDispatch();
    const toast = useToast();

    const updateCategoryQuery = async (categoryID: number, formData: FormData, options?: IUpdateCategoryOptions ) => {
        try {
            setIsLoading(true);
            const title = String(formData.get("title"));

            if (!title || !categoryID) {
                throw Error("All fields are required: categoryID, title");
            }

            dispatch(updateCategoryById({
                id: categoryID,
                title,
            }));

            toast({
                title: "Category update result",
                description: `The Category with ID: ${categoryID} successfully updated!`,
                status: "success",
                position: "top-right",
                isClosable: true
            });

            options?.onSuccess?.();
        } catch (error) {
            console.error(error);

            toast({
                title: `Category with ID: ${categoryID} update result`,
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

    return [updateCategoryQuery, { isLoading, isError }] as const;
};
