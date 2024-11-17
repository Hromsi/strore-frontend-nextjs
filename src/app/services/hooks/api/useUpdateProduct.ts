"use client";

import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { updateProductById } from "@/app/services/store/slices/productSlice";
import { useToast } from "@chakra-ui/react";

interface IUpdateProductOptions {
    onSuccess?: () => void;
    onError?: () => void;
}

export const useUpdateProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    let isError = false;
    const dispatch = useAppDispatch();
    const toast = useToast();

    const updateProductQuery = async (productID: number, formData: FormData, options?: IUpdateProductOptions ) => {
        try {
            setIsLoading(true);
            const categoryID = Number(formData.get("categoryID"));
            const title = String(formData.get("title"));
            const description = String(formData.get("description"));
            const price = +Number(formData.get("price")).toFixed(2);
            const imageUrl = String(formData.get("imageUrl"));

            if (!categoryID || !title || !description || !price || !imageUrl || !productID) {
                throw Error("All fields are required: categoryID, title, description, price, imageUrl, productID");
            }

            dispatch(updateProductById({
                id: productID,
                categoryID,
                title,
                description,
                price,
                imageUrl
            }));

            toast({
                title: "Product update result",
                description: `The Product with ID: ${productID} successfully updated!`,
                status: "success",
                position: "top-right",
                isClosable: true
            });

            options?.onSuccess?.();
        } catch (error) {
            console.error(error);

            toast({
                title: `Product with ID: ${productID} update result`,
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

    return [updateProductQuery, { isLoading, isError }] as const;
};
