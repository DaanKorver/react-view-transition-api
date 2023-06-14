declare global {
	interface Document {
		startViewTransition(
			options?: ViewTransitionOptions
		): ViewTransitionController
	}
}

export {}
