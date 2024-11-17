"use client";

import { useAppSelector } from "@/app/services/store/hooks";
import { Grid, Heading, HStack, Spinner, VStack } from "@chakra-ui/react";
import Card from "../Card/Card";
import Select from "../ui/Select/Select";
import { getCategoryOptions } from "@/app/services/helpers/options/getOptions";
import { useEffect, useState } from "react";
import { TOption } from "@/app/types/index.types";
import { IProduct } from "@/app/types/api.types";

export default function CardsDisplay() {
    let allProducts = useAppSelector((state) => state.products.products);
    const [pickedCategory, setPickedCategory] = useState<TOption | null>(null);
    const [products, setProducts] = useState<IProduct[] | null>(allProducts);
    const categories = useAppSelector((state) => state.categories.categories);

    const categoryOptions = getCategoryOptions(categories);

    useEffect(() => {
        if (!pickedCategory) return;

        if (!pickedCategory?.value) return setProducts(allProducts);

        const filteredProducts = allProducts.filter(product => product.categoryID === pickedCategory?.value);
        setProducts(filteredProducts);
    }, [pickedCategory]);

    return (
        <>
            <Select options={categoryOptions} onChange={setPickedCategory} placeholder="Select category" />
            {products ? (
                <Grid
                    templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                    gap="15px"
                >
                    {products?.map(product =>
                        <Card key={product.id} {...product}></Card>
                    )}
                </Grid>
            ) : (
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            )}
        </>
    );
}
