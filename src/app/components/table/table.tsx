import { Maybe } from "@/app/types/index.types";
import {
    Table as ChakraTable,
    TableContainer,
    Tbody,
    Thead,
    Tr
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface TableProps<T, K> {
    headerItems: T[];
    renderHeader: (item: T, idx: number, array: T[]) => ReactNode;
    bodyItems: Maybe<K[]>;
    renderBody: (item: K, idx: number, array: K[]) => ReactNode;
}

export const Table = <T, K>({ headerItems, renderHeader, bodyItems, renderBody }: TableProps<T, K>) => {
    return (
        <>
            <TableContainer>
                <ChakraTable variant='simple'>
                    <Thead>
                        <Tr>
                            {headerItems.map((item, idx, array) => renderHeader(item, idx, array))}
                        </Tr>
                    </Thead>
                    <Tbody overflow="auto">
                        {bodyItems && bodyItems.length ? (
                            bodyItems?.map((item, idx, array) => renderBody(item, idx, array))
                        ) : (
                            <Tr>No data</Tr>
                        )}
                    </Tbody>
                </ChakraTable>
            </TableContainer>
        </>
    );
}

export default Table;