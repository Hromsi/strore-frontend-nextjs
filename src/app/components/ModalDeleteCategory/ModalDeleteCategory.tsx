import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useDeleteCategory } from "@/app/services/hooks/api/category/useDeleteCategory";

interface ModalDeleteCategoryProps {
    isOpen: boolean;
    onClose: () => void;
    categoryID: number;
};

export const ModalDeleteCategory = ({ isOpen, onClose, categoryID }: ModalDeleteCategoryProps) => {
    const [deleteCategory, { isLoading: isLoadingDeleteCategory }] = useDeleteCategory();

    const isLoading = isLoadingDeleteCategory;

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await deleteCategory(categoryID, { onSuccess: onClose });
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={onSubmit}>
                    <ModalHeader>Are you sure want to delete category with ID: {categoryID}?</ModalHeader>
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
