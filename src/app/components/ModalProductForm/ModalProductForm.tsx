import { IProduct } from "@/app/types/api.types";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import SelectCategory from "../SelectCategory/SelectCategory";
import { useCreateProduct } from "@/app/services/hooks/api/product/useCreateProduct";
import { useUpdateProduct } from "@/app/services/hooks/api/product/useUpdateProduct";

interface ModalProductFormProps {
    isOpen: boolean;
    onClose: () => void;
    productItem?: IProduct;
};

export const ModalProductForm = ({ isOpen, onClose, productItem }: ModalProductFormProps) => {
    const [createProduct, { isLoading: isLoadingCreateProduct }] = useCreateProduct();
    const [updateProduct, { isLoading: isLoadingUpdateProduct }] = useUpdateProduct();

    const isLoading = isLoadingCreateProduct || isLoadingUpdateProduct;

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        if (productItem?.id) {
            await updateProduct(productItem.id, formData, { onSuccess: onClose });

            return;
        }

        await createProduct(formData, { onSuccess: onClose });
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={onSubmit}>
                    <ModalHeader>
                        {productItem?.id ? `Update the product with ID: ${productItem.id}` : "Create your new product"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isRequired>
                            <FormLabel>Category</FormLabel>
                            <SelectCategory name="categoryID" defaultValue={productItem?.categoryID}/>
                        </FormControl>

                        <FormControl mt={2} isRequired>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder="Write title" name="title" defaultValue={productItem?.title}/>
                        </FormControl>

                        <FormControl mt={2} isRequired>
                            <FormLabel>Description</FormLabel>
                            <Input placeholder="Write description" name="description" defaultValue={productItem?.description}/>
                        </FormControl>

                        <FormControl mt={2} isRequired>
                            <FormLabel>Price</FormLabel>
                            <Input placeholder="Write price" name="price" type="number" step="any" defaultValue={productItem?.price}/>
                        </FormControl>

                        <FormControl mt={2} isRequired>
                            <FormLabel>Image URL</FormLabel>
                            <Input placeholder="Add image URL" name="imageUrl" type="url" defaultValue={productItem?.imageUrl}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} type="submit" isLoading={isLoading}>
                            {productItem ? "Save" : "Create"}
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};
