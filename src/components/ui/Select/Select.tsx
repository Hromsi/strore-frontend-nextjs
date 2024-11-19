"use client";

import { Maybe, TOption } from "@/types/index.types";
import { Select as ChakraSelect, type SelectProps as ChakraSelectProps, Box } from "@chakra-ui/react";
import { ChangeEvent } from "react";

export interface SelectProps extends Omit<ChakraSelectProps, "onChange"> {
    options: Maybe<TOption[]>;
    onChange?: (newValue: TOption) => void;
}

const Select = ({ options, onChange, ...props }: SelectProps) => {
    const handleSelectionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedLabel = options?.find(option => String(option.value) === selectedValue)?.label;
        
        onChange?.({ value: Number(selectedValue), label: selectedLabel });
      };

    return (
        <ChakraSelect placeholder="Select option" onChange={handleSelectionChange} {...props}>
            {options?.map(({ value, label }) => (
                <Box
                    as="option"
                    key={`${label}_${value}`} value={value ?? ""}
                >
                    {label ?? "-"}
                </Box>
            ))}
        </ChakraSelect>
    );
}

export default Select;