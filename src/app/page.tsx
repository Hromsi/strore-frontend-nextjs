import Container from "./components/ui/Container/Container";
import CardsDisplay from "./components/CardsDisplay/CardsDisplay";


export default function Home() {

	return (
		<Container as="main" flexDir="column">
			<CardsDisplay/>
		</Container>
	);
}
