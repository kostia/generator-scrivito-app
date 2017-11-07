Scrivito.provideEditingConfig('TextWidget', {
  title: 'Text Widget',

  attributesConfig: {
    title: {
      title: 'Title',
      description: 'Optional: Title of the widget.'
    },

    content: {
      title: 'Content',
      description: 'Main content of the widget',
    },
  },

  generalProperties: [
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

