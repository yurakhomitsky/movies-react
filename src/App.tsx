import { ReactElement } from 'react';

import './App.css';
import { Footer } from './Footer/Footer.tsx';
import { RouterProvider } from 'react-router-dom';
import { appRouting } from './pages/routing.tsx';

function App(): ReactElement {

	return (<>
		<RouterProvider router={appRouting} />
		<Footer />
	</>);
}

export default App;
