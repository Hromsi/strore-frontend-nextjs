"use client";

import { redirect } from "next/navigation";
import Container from "../components/ui/Container/Container";
import { ADMIN_PASSWORD, ROUTES } from "../config/constants";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../services/helpers/localStorage";

export default function Admin() {
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

	if (password !== ADMIN_PASSWORD) return <></>;	
		
	return (
		<Container as="main" flexDir="column">
			Admin page
		</Container>
	);
}
