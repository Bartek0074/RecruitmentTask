import React, { useState, useEffect } from 'react';
import getData from './utils/getData';

import MainTable from './components/MainTable/MainTable';
import DetailsTable from './components/DetailsTable/DetailsTable'


function App() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='app'>
			<MainTable setIndex={setIndex} />
			<DetailsTable currentIndex={index}/>
		</div>
	);
}

export default App;
