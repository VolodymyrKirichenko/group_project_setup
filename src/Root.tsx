import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import {ReactPage} from './pages/ReactPage';
import {App} from './App';
import {NotFoundPage} from './pages';

enum Paths {
  HOME = '/',
  REACT = '/react',
  NOT_FOUND = '*',
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Root = () => {
	return (
		<Router>
			<Routes>
				<Route element={<App />} path={Paths.HOME}>
					<Route path={Paths.REACT}>
						<Route index element={<ReactPage />} />
					</Route>

					<Route element={<NotFoundPage />} path={Paths.NOT_FOUND} />
				</Route>
			</Routes>
		</Router>
	);
};
