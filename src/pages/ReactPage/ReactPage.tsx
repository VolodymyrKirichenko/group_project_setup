import React from 'react';

import styles from '../../App.module.scss';
import logo from '../../logo.svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ReactPage = () => {
	return (
		<header className={styles.AppHeader}>
			<img alt="logo" className={styles.AppLogo} src={logo} />

			<p>
        Edit 
				{' '}
				<code>src/App.tsx</code>
				{' '}
and save to reload.
			</p>

			<a
				className={styles.AppLink}
				href="https://reactjs.org"
				rel="noopener noreferrer"
				target="_blank"
			>
        Learn React!
			</a>
		</header>
	);
};
