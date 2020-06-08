import React, { FC } from 'react';
import './App.css';
import { Row } from 'antd';
import ShowMap from './components/Map/ShowMap';

const mainArea = {
	backgroundColor: '#a1a1a1',
	height: 'calc(100vh - 60px)',
};

const headerStyle = {
	display: 'flex',
	justifyContent: 'start',
	alignItems: 'center',
	backgroundColor: '#333',
	height: '60px',
	color: '#fff',
};

const App: FC = () => {
	return (
		<>
      <>
			<Row style={headerStyle}>
				<div className='logo'>ProxiMed</div>
			</Row>
			<Row style={mainArea}>
				<ShowMap />
			</Row>
		</>
		</>
	);
};

export default App;
