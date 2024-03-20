import { Image } from "astro:assets";
import type { User } from "@/types";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export default function Counter() {
	const [users, setUsers] = useState<User[]>([]);

	async function getData() {
		const res = await fetch("https://randomuser.me/api?results=25");
		const data = await res.json();
		setUsers(data.results);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div>
				{users.map((user) => {
					return (
						<Card user={user}>
							<Image
								width={50}
								height={50}
								src={user.picture.large}
								alt="user"
							/>
						</Card>
					);
				})}
			</div>
		</>
	);
}
