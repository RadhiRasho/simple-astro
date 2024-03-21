import type { User } from "@/types/User";
import type { ReactNode } from "react";


export function Card({ user, children }: { user: User; children: ReactNode }) {
	return (
		<div className="flex flex-col gap-2 justify-between items-center border border-red-500 rounded-3xl w-full min-w-64 p-6 bg-purple-900 backdrop-filter backdrop-blur-sm bg-opacity-35">
			{children}
			<span className="text-lg">
				{user.name.first} {user.name.last}
			</span>
			<span>
				{user.location.city}, {user.location.state}
			</span>

			<div className="gap-2 grid auto-cols-auto *:flex *:justify-evenly text-white">
				<div>
					<span className="text-lg">Email:</span>
					<span className="text-lg">{user.email}</span>
				</div>

				<div>
					<span className="text-lg">Phone:</span>
					<span className="text-lg">{user.phone}</span>
				</div>

				<div>
					<span className="text-lg">Cell:</span>
					<span className="text-lg">{user.cell}</span>
				</div>

				<div>
					<span className="text-lg">Nat:</span>
					<span className="text-lg">{user.nat}</span>
				</div>
				<div>
					<span className="text-lg">Age:</span>
					<span className="text-lg">{user.dob.age}</span>
				</div>
			</div>
		</div>
	);
}
