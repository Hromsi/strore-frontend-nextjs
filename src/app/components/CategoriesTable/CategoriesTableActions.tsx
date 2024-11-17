
import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";

export const CategoriesTableActions = () => {
    return (
        <HStack justifyContent="flex-end" mb="16px">
            <Button leftIcon={<AddIcon />} colorScheme="blue">Add new category</Button>
        </HStack>
    );
};
