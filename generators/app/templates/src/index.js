require('Config.js');

const Objs = require.context('./Objs/', true, /\.jsx?$/);
Objs.keys().forEach(Objs);

const Widgets = require.context('./Widgets/', true, /\.jsx?$/);
Widgets.keys().forEach(Widgets);

const Extensions = require.context('./Extensions/', true, /\.jsx?$/);
Extensions.keys().forEach(Extensions);

import App from 'App.jsx';

const application = document.getElementById('application');

if (application) {
  ReactDOM.render(<App />, application);
}
