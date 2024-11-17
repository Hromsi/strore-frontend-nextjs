import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useDeleteProduct } from "@/app/services/hooks/api/useDeleteProduct";

interface ModalDeleteProductProps {
    isOpen: boolean;
    onClose: () => void;
    productID: number;
};

export const ModalDeleteProduct = ({ isOpen, onClose, productID }: ModalDeleteProductProps) => {
    const [deleteProduct, { isLoading: isLoadingDeleteProduct }] = useDeleteProduct();

    const isLoading = isLoadingDeleteProduct;

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await deleteProduct(productID, { onSuccess: onClose });
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={onSubmit}>
                    <ModalHeader>Are you sure want to delete product with ID: {productID}?</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} type="submit" isLoading={isLoading}>
                            Accept
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};
