"use client";

import { redirect } from "next/navigation";
import Container from "@/components/ui/Container/Container";
import { ADMIN_PASSWORD, ROUTES } from "@/config/constants";
import { Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "@/services/helpers/localStorage";
import { ProductsTable } from "@/components/ProductsTable/ProductsTable";
import { CategoriesTable } from "@/components/CategoriesTable/CategoriesTable";

export default function Client() {
	const toast = useToast();
	const [password, setPassword] = useState<string | null>();

	useEffect(() => {
		const passwordFromLocal = getFromLocalStorage("adminPassword");
		setPassword(passwordFromLocal as string | null);

		if (!passwordFromLocal || passwordFromLocal !== ADMIN_PASSWORD) {
			const password = window.prompt("Enter admin password:");

			if (password !== ADMIN_PASSWORD) {
				toast({
					title: "Incorrect Password",
					description: "The password you entered is incorrect.",
					status: "error",
					position: "top-right",
					isClosable: true
				})

				return redirect(ROUTES.index);
			}
			saveToLocalStorage("adminPassword", password);
			return redirect(ROUTES.admin);
		};
	}, []);

	if (password !== ADMIN_PASSWORD) return (
		<Spinner
			margin="auto"
			thickness='4px'
			speed='0.65s'
			emptyColor='gray.200'
			color='blue.500'
			size='xl'
		/>
	);

	return (
		<Container as="main" flexDir="column">
			<Tabs>
				<TabList>
					<Tab>Products</Tab>
					<Tab>Categories</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ProductsTable/>
					</TabPanel>
					<TabPanel>
						<CategoriesTable/>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	);
}
