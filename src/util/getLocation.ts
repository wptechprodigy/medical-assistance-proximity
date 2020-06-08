type LocationCoords = {
	lat: number;
	lng: number;
};

const getPosition: PositionCallback = (p: Position): LocationCoords => {
	// console.log(
	// 	`Latitude: ${p.coords.latitude} and Longitude: ${p.coords.longitude}`,
  // );

	return {
		lat: p.coords.latitude,
		lng: p.coords.longitude,
	};
};

export const getLocation = (): void => {
	navigator.geolocation.getCurrentPosition(getPosition, () =>
		console.error(Error),
  );
};
