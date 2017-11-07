Scrivito.provideEditingConfig('Homepage', {
  title: 'Homepage',

  attributesConfig: {
    title: {
      title: 'Title',
      description: 'Title of the homepage.',
    },

    content: {
      title: 'Content',
      description: 'Main content of the homepage.',
    },
  },

  generalProperties: [
    'title',
    'content',
  ],

  propertiesGroups: [
    {
      title: 'My Tab',
      component: 'MyObjTab',
    },
  ],
});
