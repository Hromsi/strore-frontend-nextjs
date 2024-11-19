import { ICategory } from "@/types/api.types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, TableCellProps, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ModalCategoryForm } from "@/components/ModalCategoryForm/ModalCategoryForm";
import { ModalDeleteCategory } from "@/components/ModalDeleteCategory/ModalDeleteCategory";

interface CategoriesTableRowProps {
    categoryItem: ICategory;
}

interface CategoriesRowItemProps {
    children?: ReactNode;
}

const CategoriesRowItem = ({ children, ...props }: CategoriesRowItemProps & TableCellProps) => {
    const isCanBeTitle = typeof children === "string" || typeof children === "number"

    return (
        <Td
            textOverflow="ellipsis"
            title={isCanBeTitle ? String(children) : ""}
            textAlign="center"
            {...props}
        >
            {children}
        </Td>
    );
}

export const CategoriesTableRow = ({ categoryItem }: CategoriesTableRowProps) => {
    const {
        isOpen: isOpenCategoryUpdateModal,
        onOpen: onOpenCategoryUpdateModal,
        onClose: onCloseCategoryUpdateModal
    } = useDisclosure();
    const {
        isOpen: isOpenCategoryDeleteModal,
        onOpen: onOpenCategoryDeleteModal,
        onClose: onCloseCategoryDeleteModal
    } = useDisclosure();


    return (
        <Tr>
            <CategoriesRowItem width="150px">
                {categoryItem.id}
            </CategoriesRowItem>
            <CategoriesRowItem overflow="hidden">
                {categoryItem.title}
            </CategoriesRowItem>
            <CategoriesRowItem width={1}>
                <Button colorScheme="green" size="sm" variant="ghost" onClick={onOpenCategoryUpdateModal}>
                    <EditIcon />
                </Button>
                <Button colorScheme="red" size="sm" variant="ghost" onClick={onOpenCategoryDeleteModal}>
                    <DeleteIcon />
                </Button>
                {isOpenCategoryUpdateModal && <ModalCategoryForm
                    isOpen={isOpenCategoryUpdateModal}
                    onClose={onCloseCategoryUpdateModal}
                    categoryItem={categoryItem}
                />}
                {isOpenCategoryDeleteModal && <ModalDeleteCategory
                    isOpen={isOpenCategoryDeleteModal}
                    onClose={onCloseCategoryDeleteModal}
                    categoryID={categoryItem.id}
                />}
            </CategoriesRowItem>
        </Tr>
    );
};
