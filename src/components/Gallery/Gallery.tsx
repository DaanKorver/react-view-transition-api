import { useCallback } from 'preact/hooks'
import './Gallery.css'
import { route } from 'preact-router'

const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg']

export function Gallery() {
	const startNavigating = (targetId: number) => {
		route(`/cat/${targetId}`)
	}

	const handleClick = (e: MouseEvent) => {
		const element = e.currentTarget as HTMLDivElement
		if (!element) return
		const id = Number(element.dataset.id)
		element.style.setProperty('view-transition-name', 'full-embed')
		if (!document?.startViewTransition) {
			startNavigating(id)
			return
		}
		document.startViewTransition(() => {
			element.style.setProperty('view-transition-name', '')
			startNavigating(id)
		})
	}

	return (
		<section>
			{images.map((img, i) => (
				<div data-id={i + 1} class="cat" onClick={handleClick}>
					<img
						src={img}
						style={`view-transition-name: thumb-${i + 1}`}
						alt="cat"
					/>
				</div>
			))}
		</section>
	)
}
