import React from 'react';

import './App.css';

import logo from './logo.svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	const baseUrl = import.meta.env.VITE_BASE_URL;

	console.log('baseUrl', baseUrl);

	return (
		<div className="App">
			<header className="App-header">
				<img alt="logo" className="App-logo" src={logo} />
				<p>
          Edit 
					{' '}
					<code>src/App.tsx</code>
					{' '}
and save to reload.
				</p>
				<a
					className="App-link"
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
