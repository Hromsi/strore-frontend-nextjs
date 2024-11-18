
import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, useDisclosure } from "@chakra-ui/react";
import { ModalCategoryForm } from "../ModalCategoryForm/ModalCategoryForm";

export const CategoriesTableActions = () => {
    const {
        isOpen: isOpenCategoryCreateModal,
        onOpen: onOpenCategoryCreateModal,
        onClose: onCloseCategoryCreateModal
    } = useDisclosure();

    return (
        <HStack justifyContent="flex-end" mb="16px">
            <Button
                leftIcon={<AddIcon />}
                colorScheme="blue"
                onClick={onOpenCategoryCreateModal}
            >
                Add new category
            </Button>
            <ModalCategoryForm
                isOpen={isOpenCategoryCreateModal}
                onClose={onCloseCategoryCreateModal}
            />
        </HStack>
    );
};
