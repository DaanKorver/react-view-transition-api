import { Link, route } from 'preact-router'
import { useEffect, useRef } from 'preact/hooks'

export function Detail(props: any) {
	const imageRef = useRef<HTMLImageElement>(null)

	const startNavigating = () => {
		route('/')
	}

	const onClick = (e: MouseEvent) => {
		if (!imageRef.current) return
		imageRef.current.style.setProperty(
			'view-transition-name',
			`thumb-${props.id}`
		)
		if (!document?.startViewTransition) {
			startNavigating()
			return
		}
		document.startViewTransition(() => {
			if (!imageRef.current) return
			imageRef.current.style.setProperty('view-transition-name', '')
			startNavigating()
		})
	}

	return (
		<>
			<div className="detail">
				<button onClick={onClick}>Go back</button>
				<h1>🐈 Awesome the pawsome</h1>
				<img
					ref={imageRef}
					className="t-image"
					style="view-transition-name: full-embed; aspect-ratio: 1/1; width: 30rem; object-fit: cover;"
					src={`/${props.id}.jpeg`}
				/>
			</div>
		</>
	)
}
