"use client";

import { useAppSelector } from "@/services/store/hooks";
import { Grid } from "@chakra-ui/react";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import { TOption } from "@/types/index.types";
import { IProduct } from "@/types/api.types";
import SelectCategory from "@/components/SelectCategory/SelectCategory";

export default function CardsDisplay() {
    let allProducts = useAppSelector((state) => state.products.products);
    const [pickedCategory, setPickedCategory] = useState<TOption | null>(null);
    const [products, setProducts] = useState<IProduct[] | null>(allProducts);

    useEffect(() => {
        if (!pickedCategory) return;

        if (!pickedCategory?.value) return setProducts(allProducts);

        const filteredProducts = allProducts.filter(product => product.categoryID === pickedCategory?.value);
        setProducts(filteredProducts);
    }, [pickedCategory]);

    return (
        <>
            <SelectCategory onChange={setPickedCategory}/>
            <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                gap="15px"
            >
                {products?.map(product =>
                    <Card key={product.id} {...product}></Card>
                )}
            </Grid>
        </>
    );
}
