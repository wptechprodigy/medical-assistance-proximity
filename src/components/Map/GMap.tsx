import React, { FC, useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

type Event = {
	latLng: {
		lat: () => number;
		lng: () => number;
	};
	tb?: string;
};

const mapContainer = {
	width: '100%',
	height: '100%',
};

const options = {
	disableDefaultUI: true,
	zoomControl: true,
};

const GMap: FC = () => {
	const [marker, setMarker] = useState({
		lat: 6.649243999999999,
		lng: 3.2710745,
	});
	const [hospitals, setHospitals] = useState([] as any);

	const mapRef = useRef();
	const searchNearby = useCallback((map: any, marker) => {
		const service = new google.maps.places.PlacesService(map);

		const request = {
			location: marker,
			radius: 500,
			types: ['hospital']
		};

		service.nearbySearch(request, (results, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				console.log(results)
				setHospitals(results);
			}
		});
	}, []);

	const onMapLoad = useCallback((map) => {
		mapRef.current = map;
		searchNearby(map, marker);
	}, [searchNearby, marker]);


	const handleClick = useCallback((event: Event): void => {
		const newMarker = {
			lat: event.latLng.lat(),
			lng: event.latLng.lng(),
		};

		setMarker(() => newMarker);
	}, []);

	return (
		<GoogleMap
			mapContainerStyle={mapContainer}
			center={marker}
			zoom={14}
			options={options}
			onClick={handleClick}
			onLoad={onMapLoad}>
			{/* Child components, such as markers, info windows, etc. */}
			<Marker position={{ lat: marker.lat, lng: marker.lng }} />
			{hospitals && hospitals.map((hospital: any) => {
				console.log(hospital.name);
				return <Marker key={hospital.id} position={{lat: hospital.geometry.location.lat(), lng: hospital.geometry.location.lng()}} icon={{
					url: '/caduceus.svg',
					scaledSize: new window.google.maps.Size(30, 30),
					origin: new window.google.maps.Point(0, 0),
					anchor: new window.google.maps.Point(15, 15)}} />
			})}
		</GoogleMap>
	);
};

export default GMap;
