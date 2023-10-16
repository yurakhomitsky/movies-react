import { ReactElement } from 'react';

import './App.css';
import { Footer } from './Footer/Footer.tsx';
import { RouterProvider } from 'react-router-dom';
import { appRouting } from './pages/routing.tsx';
import { MovieListProvider } from './Movies';

function App(): ReactElement {

	return (<>
		<MovieListProvider>
			<RouterProvider router={appRouting} />
		</MovieListProvider>
		<Footer />
	</>);
}

export default App;
