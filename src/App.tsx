import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CoinItem from './components/card.component';
import NavigationBar from './components/main-layout.component';
import CoinDetail from './pages/coin-detail/coin-detail';
import CoinList from './pages/coin-list/coin-list';
import Home from './pages/home';

function App() {
	return (
		<div className='App'>
			{/* <ThemeProvider> */}
			<CssBaseline>
				<Container>
					<Routes>
						<Route path='' element={<NavigationBar />}>
							<Route path='/' element={<Home />} />
							<Route path='coin-list' element={<CoinList />} />
							<Route path='coin-detail/:id' element={<CoinDetail />} />
						</Route>
					</Routes>
				</Container>
			</CssBaseline>
			{/* </ThemeProvider> */}
		</div>
	);
}

export default App;
