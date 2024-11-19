import Container from "./components/ui/Container/Container";
import CardsDisplay from "./components/CardsDisplay/CardsDisplay";
import { Heading, VStack } from "@chakra-ui/react";

export default function Home() {

	return (
		<Container as="main" flexDir="column">
			<VStack
				as="section"
				paddingTop="15px"
				paddingBottom="15px"
				gap="15px"
			>
				<Heading as="h1" color="blue.500">Products of Tech Heim</Heading>
				<CardsDisplay />
			</VStack>
		</Container>
	);
}
