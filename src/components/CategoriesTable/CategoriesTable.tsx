
import { useAppSelector } from "@/services/store/hooks";
import { Table } from "@/components/table/table";
import { TableHeaderItem } from "@/components/table/tableHeaderItem";
import { HeaderElement } from "@/types/index.types";
import { CategoriesTableRow } from "@/components/CategoriesTable/CategoriesTableRow";
import { CategoriesTableActions } from "@/components/CategoriesTable/CategoriesTableActions";

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
