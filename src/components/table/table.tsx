import { Maybe } from "@/types/index.types";
import {
    Table as ChakraTable,
    TableContainer,
    Tbody,
    Td,
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
                    <Tbody overflow="auto" minH="100%">
                        {bodyItems && bodyItems.length ? (
                            bodyItems?.map((item, idx, array) => renderBody(item, idx, array))
                        ) : (
                            <Tr height="200px">
                                <Td colSpan={99} fontSize="24px" textAlign="center">No data</Td>
                            </Tr>
                        )}
                    </Tbody>
                </ChakraTable>
            </TableContainer>
        </>
    );
}

export default Table;