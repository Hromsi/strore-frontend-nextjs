import { ICategory, IProduct } from "@/app/types/api.types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Button,
    TableCellProps,
    Td,
    Tr
} from "@chakra-ui/react";
import { ReactNode } from "react";

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
    return (
        <Tr>
            <CategoriesRowItem width="150px">
                {categoryItem.id}
            </CategoriesRowItem>
            <CategoriesRowItem overflow="hidden">
                {categoryItem.title}
            </CategoriesRowItem>
            <CategoriesRowItem width={1}>
                <Button colorScheme="green" size="sm" variant="ghost"><EditIcon /></Button>
                <Button colorScheme="red" size="sm" variant="ghost"><DeleteIcon /></Button>
            </CategoriesRowItem>
        </Tr>
    );
};
