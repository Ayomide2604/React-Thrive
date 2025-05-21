import { useCallback } from "react";

/**
 * A custom hook that provides functionality to scroll to the top of the page
 * @param {Object} options - Configuration options
 * @param {number} options.behavior - Scroll behavior ('smooth' or 'auto')
 * @param {number} options.duration - Duration of the scroll animation in milliseconds (only applies when behavior is 'smooth')
 * @returns {Function} A function that triggers the scroll to top
 */
const useScrollToTop = (options = {}) => {
	const { behavior = "smooth", duration = 500 } = options;

	const scrollToTop = useCallback(() => {
		if (behavior === "smooth") {
			const startPosition = window.pageYOffset;
			const startTime = performance.now();

			const animateScroll = (currentTime) => {
				const elapsedTime = currentTime - startTime;
				const progress = Math.min(elapsedTime / duration, 1);

				// Easing function for smooth animation
				const easeInOutCubic = (t) =>
					t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
				const currentPosition = startPosition * (1 - easeInOutCubic(progress));

				window.scrollTo(0, currentPosition);

				if (progress < 1) {
					requestAnimationFrame(animateScroll);
				}
			};

			requestAnimationFrame(animateScroll);
		} else {
			window.scrollTo({
				top: 0,
				behavior,
			});
		}
	}, [behavior, duration]);

	return scrollToTop;
};

export default useScrollToTop;
