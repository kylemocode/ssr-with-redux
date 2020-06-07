import React from 'react';

const Home = () => {
	return (
		<div>
			<div>I am the BEST! home component</div>
			<button onClick={() => console.log('Hi there!')}>Press me!</button>
		</div>
	);
}

export default {
	component: Home
};