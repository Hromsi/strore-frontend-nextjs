"use client";

import {
    Card,
    CardBody,
    Stack,
    Heading,
    CardFooter,
    Button,
    Image,
    Text,
    Flex,
} from "@chakra-ui/react";
import { IProductCart } from "@/app/types/index.types";
import { DeleteIcon } from "@chakra-ui/icons";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useAppDispatch } from "@/app/services/store/hooks";
import { addOneProductToCartById, removeOneProductFromCartById, removeProductFromCartById } from "@/app/services/store/slices/cartSlice";

interface CartCardProps {
    productCartItem: IProductCart;
}

export default function CartCard({ productCartItem }: CartCardProps) {
    const dispatch = useAppDispatch();

    const handleRemoveOneProductFromCart = () => {
        dispatch(removeOneProductFromCartById(productCartItem.id))
    };

    const handleAddOneProductToCart = () => {
        dispatch(addOneProductToCartById(productCartItem.id))
    };

    const handleRemoveProductFromCart = () => {
        dispatch(removeProductFromCartById(productCartItem.id))
    };

    return (
        <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            mb="1.5"
        >
            <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "100px" }}
                src={productCartItem.imageUrl}
                alt={productCartItem.title}
            />
            <Stack p="1.5">
                <CardBody p="0" display="flex" flexDir="column" gap="2">
                    <Heading size="xs">
                        {productCartItem.title}
                    </Heading>
                    <Text fontSize="12px">
                        {productCartItem.description}
                    </Text>
                </CardBody>
                <CardFooter p="0" display="flex" gap="2" justify="space-between" alignItems="center">
                    <Flex gap="2" alignItems="center">
                        <Button colorScheme="blue" size="sm" variant="ghost" onClick={handleRemoveOneProductFromCart}>
                            <CiSquareMinus />
                        </Button>
                        <Text fontWeight="semibold" fontSize="12px">
                            {productCartItem.total}
                        </Text>
                        <Button colorScheme="blue" size="sm" variant="ghost" onClick={handleAddOneProductToCart}>
                            <CiSquarePlus />
                        </Button>
                    </Flex>
                    <Button colorScheme="red" size="sm" variant="ghost" onClick={handleRemoveProductFromCart}>
                        <DeleteIcon />
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
}