"use client";

import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { createProduct } from "@/app/services/store/slices/productSlice";
import { useToast } from "@chakra-ui/react";

interface ICreateProductOptions {
    onSuccess?: () => void;
    onError?: () => void;
}

export const useCreateProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    let isError = false;
    const dispatch = useAppDispatch();
    const toast = useToast();

    const createProductQuery = async (formData: FormData, options?: ICreateProductOptions ) => {
        try {
            setIsLoading(true);
            const categoryID = Number(formData.get("categoryID"));
            const title = String(formData.get("title"));
            const description = String(formData.get("description"));
            const price = +Number(formData.get("price")).toFixed(2);
            const imageUrl = String(formData.get("imageUrl"));

            if (!categoryID || !title || !description || !price || !imageUrl) {
                throw Error("All fields are required: categoryID, title, description, price, imageUrl");
            }

            dispatch(createProduct({
                categoryID,
                title,
                description,
                price,
                imageUrl
            }));

            toast({
                title: "Product create result",
                description: "The Product successfully created!",
                status: "success",
                position: "top-right",
                isClosable: true
            });

            options?.onSuccess?.();
        } catch (error) {
            console.error(error);

            toast({
                title: "Product create result",
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

    return [createProductQuery, { isLoading, isError }] as const;
};
