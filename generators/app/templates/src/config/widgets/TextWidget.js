import TextWidget from 'models/widgets/TextWidget';

Scrivito.provideUiConfig(TextWidget, {
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

  /*
  propertiesGroups: [
    {
      title: 'My Tab',
      component: 'MyWidgetTab',
    },
  ],
  */
});

