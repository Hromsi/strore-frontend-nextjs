
import { useAppSelector } from "@/app/services/store/hooks";
import { Table } from "../table/table";
import { TableHeaderItem } from "../table/tableHeaderItem";
import { HeaderElement } from "@/app/types/index.types";
import { CategoriesTableRow } from "./CategoriesTableRow";
import { CategoriesTableActions } from "./CategoriesTableActions";

const categoriesHeader: HeaderElement[] = [
    {
        id: 0,
        title: "ID"
    },
    {
        id: 1,
        title: "Title"
    },
    {
        id: 8,
        title: "Actions"
    }
];

export const CategoriesTable = () => {
    let allCategories = useAppSelector((state) => state.categories.categories);

    return (
        <>
            <CategoriesTableActions />
            <Table
                headerItems={categoriesHeader}
                renderHeader={(item) => <TableHeaderItem key={item.id} {...item} />}
                bodyItems={allCategories}
                renderBody={(item) => (
                    <CategoriesTableRow
                        key={item.id}
                        categoryItem={item}
                    />
                )}
            />
        </>
    );
};
