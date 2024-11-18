"use client";

import { useAppSelector } from "@/app/services/store/hooks";
import {
    Button,
    Icon,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Text,
} from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import CartCard from "./CartCard";

export default function Cart() {
    let cart = useAppSelector((state) => state.cart.cart);

    const totalCartPrice = cart.products.reduce((acc, cartProduct) => acc + cartProduct.price * cartProduct.total, 0).toFixed(2);

    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <Button
                    leftIcon={
                        <Icon as={LuShoppingCart} w={6} h={6} color="gray.500" />
                    }
                    color="gray.500"
                    borderRadius="full"
                    variant="ghost"
                >
                    {cart.totalProducts}
                </Button>
            </PopoverTrigger>
            <PopoverContent minW="none" width="100%" maxWidth="md">
                <PopoverHeader fontWeight="semibold" color="blue.600">Cart of products</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody maxH="60vh" overflow="auto" gap="2">
                    {cart.products.length ? (
                        cart.products.map(productCart => (
                            <CartCard key={`${productCart.id}_cartItem`} productCartItem={productCart}/>
                        ))
                    ) : (
                        <Text fontSize="2xl" fontWeight="semibold" color="gray.300" textAlign="center">No products in cart</Text>
                    )}
                </PopoverBody>
                <PopoverFooter display="flex" justifyContent="space-between" alignItems="center" gap="5">
                    <Button variant="solid" colorScheme="blue" disabled={!cart.totalProducts}>
                        Buy now
                    </Button>
                    <Text fontWeight="semibold" fontSize="xl" textAlign="end">
                            Total cart price: <Text as="span" fontWeight="bold">{totalCartPrice} $</Text>
                    </Text>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}