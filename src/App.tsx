import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CoinItem from './components/card.component';
import Home from './pages/home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='coin-list' element={<CoinItem />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
