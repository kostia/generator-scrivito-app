import Homepage from 'models/objs/Homepage';

Scrivito.provideUiConfig(Homepage, {
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

  /*
  customGroups: [
    {
      title: 'My Tab',
      component: 'MyObjTab',
    },
  ],
  */
});
