
import {Route, Switch} from 'react-router-dom';
import TheLandingPage from './pages/TheLandingPage';
import TheLoginPage from './pages/TheLoginPage';
import TheRegisterPage from './pages/TheRegisterPage';

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
			<Route path='/register' exact>
				<TheRegisterPage/>
			</Route>
		</Switch>
	</>
	)
}


export default App;
