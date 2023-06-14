import './app.css'
import { useEffect, useState } from 'preact/hooks'
import { Gallery } from './components/Gallery'
import { Loader } from './components/Loader'
import Router, { Link, Route } from 'preact-router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export function App() {
	return (
		<>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/cat/:id" component={Detail} />
			</Router>
		</>
	)
}
