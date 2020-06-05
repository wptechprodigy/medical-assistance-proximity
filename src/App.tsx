import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';

const App: FC = () => {
	return (
		<div className='App'>
			<h1>This is Typescript with React</h1>
      <Button type='primary'>Test Button</Button>
		</div>
	);
};

export default App;
