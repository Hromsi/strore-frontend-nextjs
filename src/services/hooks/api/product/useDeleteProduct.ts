"use client";

import { useState } from "react";
import { removeProductById } from "@/services/store/slices/productSlice";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch } from "@/services/store/hooks";

interface IDeleteProductOptions {
    onSuccess?: () => void;
    onError?: () => void;
}

export const useDeleteProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    let isError = false;
    const dispatch = useAppDispatch();
    const toast = useToast();

    const deleteProductQuery = async (productID: number, options?: IDeleteProductOptions ) => {
        try {
            setIsLoading(true);
            
            if (!productID) {
                throw Error("Field productID is required!");
            }

            dispatch(removeProductById(productID));

            toast({
                title: "Product delete result",
                description: `The Product with ID: ${productID} successfully deleted!`,
                status: "success",
                position: "top-right",
                isClosable: true
            });

            options?.onSuccess?.();
        } catch (error) {
            console.error(error);

            toast({
                title: `Product with ID: ${productID} delete result`,
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

    return [deleteProductQuery, { isLoading, isError }] as const;
};
