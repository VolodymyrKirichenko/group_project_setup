import React from 'react';

import styles from './App.module.scss';
import logo from './logo.svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	const baseUrl = import.meta.env.VITE_BASE_URL;

	console.log('baseUrl', baseUrl);

	return (
		<div className={styles.App}>
			<header className={styles.AppHeader}>
				<img alt="logo" className={styles.AppLogo} src={logo} />
				<p>
          Edit 
					{' '}
					<code>Develop</code>
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
		</div>
	);
}

export default App;
