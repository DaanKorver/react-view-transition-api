import { useEffect, useState } from 'preact/hooks'
import { Gallery } from '../components/Gallery'

const amount = 3

export function Home() {
	return (
		<>
			<h1>🚩 View Transition API</h1>
			<Gallery />
		</>
	)
}
