import { ICategory } from "@/types/api.types";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useCreateCategory } from "@/services/hooks/api/category/useCreateCategory";
import { useUpdateCategory } from "@/services/hooks/api/category/useUpdateCategory";

interface ModalCategoryFormProps {
    isOpen: boolean;
    onClose: () => void;
    categoryItem?: ICategory;
};

export const ModalCategoryForm = ({ isOpen, onClose, categoryItem }: ModalCategoryFormProps) => {
    const [createCategory, { isLoading: isLoadingCreateCategory }] = useCreateCategory();
    const [updateCategory, { isLoading: isLoadingUpdateCategory }] = useUpdateCategory();

    const isLoading = isLoadingCreateCategory || isLoadingUpdateCategory;

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        if (categoryItem?.id) {
            await updateCategory(categoryItem.id, formData, { onSuccess: onClose });

            return;
        }

        await createCategory(formData, { onSuccess: onClose });
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={onSubmit}>
                    <ModalHeader>
                        {categoryItem?.id ? `Update the category with ID: ${categoryItem.id}` : "Create your new category"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl mt={2} isRequired>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder="Write title" name="title" defaultValue={categoryItem?.title}/>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} type="submit" isLoading={isLoading}>
                            {categoryItem ? "Save" : "Create"}
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};
