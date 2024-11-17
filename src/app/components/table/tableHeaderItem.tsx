import { HeaderElement } from "@/app/types/index.types";
import { Th } from "@chakra-ui/react";


export const TableHeaderItem = ({ title }: HeaderElement) => {
    return (
        <Th textAlign="center">{title}</Th>
    );
};
