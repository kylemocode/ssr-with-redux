import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

// https://react-ssr-api-herokuapp.com/

export default (req, store) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);

	const html = `
		<html>
			<head></head>
			<body>
				<div id="root">${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`
	return html;
}