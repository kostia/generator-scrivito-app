require('./config/Scrivito.js');

const models = require.context('./models/', true, /\.jsx?$/);
models.keys().forEach(models);

const components = require.context('./components/', true, /\.jsx?$/);
components.keys().forEach(components);

const ui = require.context('./ui/', true, /\.jsx?$/);
ui.keys().forEach(ui);

import App from 'components/App.jsx';

const application = document.getElementById('application');

if (application) {
  ReactDOM.render(<App />, application);
}
