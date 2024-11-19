
import { ProductsTableRow } from "@/components/ProductsTable/ProductsTableRow";
import { useAppSelector } from "@/services/store/hooks";
import { Table } from "@/components/table/table";
import { TableHeaderItem } from "@/components/table/tableHeaderItem";
import { HeaderElement } from "@/types/index.types";
import { ProductsTableActions } from "@/components/ProductsTable/ProductsTableActions";

const productsHeader: HeaderElement[] = [
    {
        id: 0,
        title: "ID"
    },
    {
        id: 1,
        title: "CategoryID"
    },
    {
        id: 2,
        title: "Title"
    },
    {
        id: 3,
        title: "Description"
    },
    {
        id: 6,
        title: "Price"
    },
    {
        id: 7,
        title: "ImageUrl"
    },
    {
        id: 8,
        title: "Actions"
    },
];

export const ProductsTable = () => {
    let allProducts = useAppSelector((state) => state.products.products);

    return (
        <>
            <ProductsTableActions />
            <Table
                headerItems={productsHeader}
                renderHeader={(item) => <TableHeaderItem key={item.id} {...item} />}
                bodyItems={allProducts}
                renderBody={(item) => (
                    <ProductsTableRow
                        key={item.id}
                        productItem={item}
                    />
                )}
            />
        </>
    );
};
