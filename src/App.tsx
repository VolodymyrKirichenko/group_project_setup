import React from 'react';
import {Outlet} from 'react-router-dom';

import styles from './App.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function App() {
	const baseUrl = import.meta.env.VITE_BASE_URL;

	console.log('baseUrl', baseUrl);

	return (
		<div className={styles.App}>
			<Outlet />
		</div>
	);
}
