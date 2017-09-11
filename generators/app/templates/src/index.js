require('./config/Scrivito.js');

const objConfigs = require.context('./config/objs/', true, /\.jsx?$/);
objConfigs.keys().forEach(objConfigs);

const widgetConfigs = require.context('./config/widgets/', true, /\.jsx?$/);
widgetConfigs.keys().forEach(widgetConfigs);

const models = require.context('./models/', true, /\.jsx?$/);
models.keys().forEach(models);

const components = require.context('./components/', true, /\.jsx?$/);
components.keys().forEach(components);

const extensions = require.context('./extensions/', true, /\.jsx?$/);
extensions.keys().forEach(extensions);

import App from 'components/App.jsx';

const application = document.getElementById('application');

if (application) {
  ReactDOM.render(<App />, application);
}
