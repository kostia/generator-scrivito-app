var Generator = require('yeoman-generator');

const WARNING = `
  WARNING: You provided no tenant ID, so we're using "scrivito-tenant-id" instead.
  Your app won't be able to connect to Scrivito until you provide a real tenant ID.
  You can find your tenant ID at the Scrivito dashboard: https://my.scrivito.com/tenants
  Once you found your tenant ID, please adjust the file "src/config/Scrivito.js".
`;

const SUCCESS = `
  See README.md for the instructions of how to get the app running!
  😘 😘 😘
`;

module.exports = class extends Generator {
  generatingApp() {
    this.prompt({
      type: 'input',
      name: 'tenantId',
      message: "What's your Tenant ID",
      default: 'scrivito-tenant-id',
      store: true,
    }).then(({ tenantId }) => {
      if (tenantId === 'scrivito-tenant-id') {
        this.log(WARNING);
      }

      this.prompt({
        type: 'input',
        name: 'appName',
        message: "What's the application name",
        default: 'my-scrivito-app',
        store: true,
      }).then(({ appName }) => {
        this.fs.copyTpl(
          this.templatePath('package.json'),
          this.destinationPath('package.json'),
          { appName }
        );

        this.fs.copyTpl(
          this.templatePath('webpack.config.js'),
          this.destinationPath('webpack.config.js')
        );

        this.fs.copyTpl(
          this.templatePath('public'),
          this.destinationPath('public'),
          { appName }
        );

        this.fs.copyTpl(
          this.templatePath('README.md'),
          this.destinationPath('README.md'),
          { appName }
        );

        this.fs.copyTpl(
          this.templatePath('src/Config.js'),
          this.destinationPath('src/Config.js'),
          { tenantId }
        );

        this.fs.copyTpl(
          this.templatePath('src/Objs'),
          this.destinationPath('src/Objs')
        );

        this.fs.copyTpl(
          this.templatePath('src/Widgets'),
          this.destinationPath('src/Widgets')
        );

        this.fs.copyTpl(
          this.templatePath('src/Extensions'),
          this.destinationPath('src/Extensions')
        );

        this.fs.copyTpl(
          this.templatePath('src/App.jsx'),
          this.destinationPath('src/App.jsx')
        );

        this.fs.copyTpl(
          this.templatePath('src/index.js'),
          this.destinationPath('src/index.js')
        );

        this.log(SUCCESS);
      });
    });
  }
};
