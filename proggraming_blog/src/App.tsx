
import {Route, Switch} from 'react-router-dom';
import TheLandingPage from './pages/TheLandingPage';
import Header from './components/layout/header';

function App() {

	return(
	<>
		<Header/>
		<Switch>
			<Route path="/" exact>
				<TheLandingPage/>
			</Route>
		</Switch>
	</>
	)
}


export default App;
