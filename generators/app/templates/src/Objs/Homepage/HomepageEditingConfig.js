Scrivito.provideEditingConfig('Homepage', {
  title: 'Homepage',

  attributes: {
    title: {
      title: 'Title',
      description: 'Title of the homepage.',
    },

    content: {
      title: 'Content',
      description: 'Main content of the homepage.',
    },
  },

  properties: [
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
