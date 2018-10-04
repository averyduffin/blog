import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom'
// import { fixDate } from './utils';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Article from './components/Article';
import store from './store';

const App = () => (
	<Provider store={store}>
		<div>
			<Header/>
			<Router>
				<div>
					<Route  exact path="/" component={Landing} />
					<Route path="/article/:id" component={Article} />
				</div>
			</Router>
			<Footer />
		</div>
	</Provider>
);

export default App;
