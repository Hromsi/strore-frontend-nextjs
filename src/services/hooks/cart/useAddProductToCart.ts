"use client";

import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch } from "@/services/store/hooks";
import { IProduct } from "@/types/api.types";
import { addProductToCart } from "@/services/store/slices/cartSlice";

export const useAddProductToCart = () => {
    const [isLoading, setIsLoading] = useState(false);
    let isError = false;
    const dispatch = useAppDispatch();
    const toast = useToast();

    const addProductToCartQuery = async (productData: IProduct ) => {
        try {
            setIsLoading(true);

            if (
                !productData.id ||
                !productData.categoryID ||
                !productData.title ||
                !productData.description ||
                !productData.price ||
                !productData.imageUrl
            ) {
                throw Error("All fields are required: id, categoryID, title, description, price, imageUrl");
            }

            dispatch(addProductToCart(productData));
    
            toast({
                title: "Product add to cart result",
                description: `The Product: "${productData.title}" successfully added!`,
                status: "success",
                position: "top-right",
                isClosable: true,
                containerStyle: {
                    maxWidth: "350px"
                }
            });
        } catch (error) {
            console.error(error);

            toast({
                title: "Product add to cart result",
                description: "Something went wrong!",
                status: "error",
                position: "top-right",
                isClosable: true
            });
            isError = true;
        } finally {
            setIsLoading(false);
        };
    };

    return [addProductToCartQuery, { isLoading, isError }] as const;
};
