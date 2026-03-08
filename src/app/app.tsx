import { Provider as Jotai } from 'jotai'
import { Provider as Urql } from 'urql'
import { urqlClient } from './const/urql'
import { Layout } from './layout'

export function App() {
	return (
		<>
			<Jotai>
				<Urql value={urqlClient}>
					<Layout />
				</Urql>
			</Jotai>
		</>
	)
}
