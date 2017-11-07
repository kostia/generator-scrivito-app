Scrivito.provideEditingConfig('Image', {
  title: 'Image',

  attributesConfig: {
    blob: {
      title: 'Image',
      description: 'Updating this image will update it eveywhere it was used.',
    },
  },

  generalProperties: [
    'blob',
  ],
});
