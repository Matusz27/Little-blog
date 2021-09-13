
import {Route, Switch} from 'react-router-dom';
import TheLandingPage from './pages/TheLandingPage';
import Header from './components/layout/header';

function App() {

	return(
	<>
		<Switch>
			<Route path="/" exact>
				<Header/>
				<TheLandingPage/>
			</Route>
		</Switch>
	</>
	)
}


export default App;
