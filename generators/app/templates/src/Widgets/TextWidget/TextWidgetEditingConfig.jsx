Scrivito.provideEditingConfig('TextWidget', {
  title: 'Text Widget',

  attributes: {
    title: {
      title: 'Title',
      description: 'Optional: Title of the widget.'
    },

    content: {
      title: 'Content',
      description: 'Main content of the widget',
    },
  },

  properties: [
    'title',
    'content',
  ],

  propertiesGroups: [
    {
      title: 'My Tab',
      component: 'MyWidgetTab',
    },
  ],
});

