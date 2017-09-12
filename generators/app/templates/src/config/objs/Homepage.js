import Homepage from 'models/objs/Homepage';

Scrivito.provideEditingConfig(Homepage, {
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

  /*
  propertiesGroups: [
    {
      title: 'My Tab',
      component: 'MyObjTab',
    },
  ],
  */
});
