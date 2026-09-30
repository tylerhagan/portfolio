// Server entry for prerendering: renders one route of the app to an HTML string.
// Built with `vite build --ssr` and used by scripts/prerender-routes.mjs at build time only.
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export const render = (page, id = null) =>
  renderToString(
    <React.StrictMode>
      <App initialRoute={{ page, id }} />
    </React.StrictMode>
  );
