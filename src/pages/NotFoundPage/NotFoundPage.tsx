import styles from './style.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const NotFoundPage = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Page not found</h1>

			<p className={styles.description}>
				{/* eslint-disable-next-line max-len */}
        Sorry, we can’t find the page you’re looking for. It may have been moved, renamed, or it’s
        possible the link was incorrect. Please check the URL or return to the homepage.
			</p>
		</div>
	);
};
