import { IProduct } from "@/app/types/api.types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Button,
    TableCellProps,
    Td,
    Tr,
    // useToast
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface ProductsTableRowProps {
    productItem: IProduct;
}

interface ProductsRowItemProps {
    children?: ReactNode;
}

const ProductsRowItem = ({ children, ...props }: ProductsRowItemProps & TableCellProps) => {
    const isCanBeTitle = typeof children === "string" || typeof children === "number"

    return (
        <Td
            maxW={1}
            textOverflow="ellipsis"
            title={isCanBeTitle ? String(children) : ""}
            textAlign="center"
            {...props}
        >
            {children}
        </Td>
    );
}

export const ProductsTableRow = ({ productItem }: ProductsTableRowProps) => {
    // const toast = useToast();

    return (
        <Tr>
            <ProductsRowItem>
                {productItem.id}
            </ProductsRowItem>
            <ProductsRowItem>
                {productItem.categoryID}
            </ProductsRowItem>
            <ProductsRowItem maxWidth="250px" overflow="hidden">
                {productItem.title}
            </ProductsRowItem>
            <ProductsRowItem overflow="hidden" >
                {productItem.description}
            </ProductsRowItem>
            <ProductsRowItem maxWidth="150px">
                {`${productItem.price} $`}
            </ProductsRowItem>
            <ProductsRowItem
                overflow="hidden"
                _hover={{
                    textDecoration: "underline"
                }}
            >
                <Link href={productItem.imageUrl} target="_blank">{productItem.imageUrl}</Link>
                
            </ProductsRowItem>
            <ProductsRowItem maxWidth="130px">
                <Button colorScheme="green" size="sm" variant="ghost"><EditIcon /></Button>
                <Button colorScheme="red" size="sm" variant="ghost"><DeleteIcon/></Button>
            </ProductsRowItem>
        </Tr>
    );
};
