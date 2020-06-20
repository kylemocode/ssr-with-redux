import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return (
		<div>
			<h1>Oops, route not found</h1>
		</div>
	)
};

export default {
	component: NotFoundPage
};