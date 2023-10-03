import { ReactElement } from 'react';

import './App.css';
import { Footer } from './Footer/Footer.tsx';
import { MovieListPage } from './pages';

function App(): ReactElement {

	return (<>
		<MovieListPage />
		<Footer />
	</>);
}

export default App;
