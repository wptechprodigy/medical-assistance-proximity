import React from 'react';
import usePlacesAutoComplete, {
	getGeocode,
	getLatLng,
	LatLng,
} from 'use-places-autocomplete';

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox';

import '@reach/combobox/styles.css';

const Search = () => {
	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutoComplete({
		requestOptions: {
			location: { lat: () => 6.4474, lng: () => 3.3903 } as LatLng,
			radius: 200 * 1000,
		},
	});

	return (
		<div className='search'>
			<Combobox
				onSelect={async (address) => {
					setValue(address, false);
					clearSuggestions();

					try {
						const results = await getGeocode({ address });
						const { lat, lng } = await getLatLng(results[0]);
						console.log('Lat:', lat, 'Long:', lng);
					} catch (error) {
						console.error(error);
					}
				}}>
				<ComboboxInput
					value={value}
					onChange={(e: { target: { value: string } }) => {
						setValue(e.target.value);
					}}
					disabled={!ready}
					placeholder='Enter an address'
				/>
				<ComboboxPopover>
					<ComboboxList>
						{status === 'OK' &&
							data.map(({ id, description }) => (
								<ComboboxOption key={id} value={description} />
							))}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		</div>
	);
};

export default Search;
