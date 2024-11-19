import { Metadata } from "next";
import Client from "@/app/admin/client";

export const metadata: Metadata = {
	title: "Admin panel Tech Heim"
}

export default function Admin() {
	return (
		<Client/>
	);
}
