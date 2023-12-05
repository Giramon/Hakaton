import React, { useState, useEffect } from 'react';

import Kol from './Persik';
import Vus from './Vus';


const Glav = () => {
	const [activePanel, setActivePanel] = useState('kol');

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<header>
			<view activePanel={activePanel}>
			<Kol id='kol'  go={go} />
			<Vus id='vus' go={go} />
			</view>
    	</header>
	);
}

export default Glav;
