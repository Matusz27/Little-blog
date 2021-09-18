
import {Route, Switch} from 'react-router-dom';
import TheLandingPage from './pages/TheLandingPage';
import TheLoginPage from './pages/TheLoginPage';

function App() {

	return(
	<>
		<Switch>
			<Route path="/" exact>
				<TheLandingPage/>
			</Route>
			<Route path='/login' exact>
				<TheLoginPage/>
			</Route>
		</Switch>
	</>
	)
}


export default App;
