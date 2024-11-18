"use client";

import { useState } from "react";
import { createCategory } from "@/app/services/store/slices/categorySlice";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch } from "@/app/services/store/hooks";

interface ICreateCategoryOptions {
    onSuccess?: () => void;
    onError?: () => void;
}

export const useCreateCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    let isError = false;
    const dispatch = useAppDispatch();
    const toast = useToast();

    const createCategoryQuery = async (formData: FormData, options?: ICreateCategoryOptions ) => {
        try {
            setIsLoading(true);
            const title = String(formData.get("title"));

            if (!title) {
                throw Error("All fields are required: title");
            }

            dispatch(createCategory({
                title,
            }));

            toast({
                title: "Category create result",
                description: "The Category successfully created!",
                status: "success",
                position: "top-right",
                isClosable: true
            });

            options?.onSuccess?.();
        } catch (error) {
            console.error(error);

            toast({
                title: "Category create result",
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

    return [createCategoryQuery, { isLoading, isError }] as const;
};
