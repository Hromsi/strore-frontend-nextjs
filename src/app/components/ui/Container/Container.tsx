import { Container as ChakraContainer, ContainerProps as ChakraContainerProps } from "@chakra-ui/react";

interface ContainerProps extends ChakraContainerProps {
    children?: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
    return (
        <ChakraContainer maxW="8xl" display="flex" {...props}>
            {children}
        </ChakraContainer>
    );
}

export default Container;