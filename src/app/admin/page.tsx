import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
	title: "Admin panel Tech Heim"
}

export default function Admin() {
	return (
		<Client/>
	);
}
