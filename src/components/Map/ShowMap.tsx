import React, { FC } from 'react';
import { useLoadScript } from '@react-google-maps/api';

import ErrorMessage from '../ErrorMessage';
import { Spinner } from '../Spinner';
import GMap from './GMap';
import { Col } from 'antd';
import Search from '../Search/Search';

const mapArea = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const sideBar = {
	backgroundColor: '#d1d1d1',
};

const libraries = ['places'];

const ShowMap: FC = () => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	return (
		<>
			<Col className='p-y-40 pt' style={sideBar} span={6}>
				<Search />
			</Col>
			<Col style={mapArea} span={18}>
				{loadError ? <ErrorMessage /> : !isLoaded ? <Spinner /> : <GMap />}
			</Col>
		</>
	);
};

export default ShowMap;
