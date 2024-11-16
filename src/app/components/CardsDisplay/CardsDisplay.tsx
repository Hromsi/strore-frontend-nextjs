"use client";

import { useAppSelector } from "@/app/services/store/hooks";
import { Grid } from "@chakra-ui/react";
import Card from "../Card/Card";

export default function CardsDisplay() {
	const products = useAppSelector((state) => state.products);

	return (
        <Grid
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            gap="15px"
            paddingTop="15px"
            paddingBottom="15px"
        >
            {products.products.map(product => 
                <Card key={product.id} {...product}></Card>
            )}
        </Grid>
	);
}
