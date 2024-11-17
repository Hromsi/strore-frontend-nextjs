
import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, useDisclosure } from "@chakra-ui/react";
import { ModalProductForm } from "../ModalProductForm/ModalProductForm";

export const ProductsTableActions = () => {
    const {
        isOpen: isOpenProductCreateModal,
        onOpen: onOpenProductCreateModal,
        onClose: onCloseProductCreateModal
    } = useDisclosure();

    return (
        <HStack justifyContent="flex-end" mb="16px">
            <Button
                leftIcon={<AddIcon />}
                colorScheme="blue"
                onClick={onOpenProductCreateModal}
            >
                Add new product
            </Button>
            <ModalProductForm
                isOpen={isOpenProductCreateModal}
                onClose={onCloseProductCreateModal}
            />
        </HStack>
    );
};
