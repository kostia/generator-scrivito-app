import Download from 'models/objs/Download';

Scrivito.provideEditingConfig(Download, {
  title: 'Download',

  attributesConfig: {
    blob: {
      title: 'Blob',
    },
  },
});
