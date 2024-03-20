import type { User } from '@/types'
import type { ReactNode } from 'react'

export function Card({ user, children }: { user: User; children: ReactNode }) {
	return (
		<div>
			{children}
			<p className="text-random">
				{user.name.first} {user.name.last}
			</p>
		</div>
	)
}
