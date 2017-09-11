import TextWidget from 'models/widgets/TextWidget';

Scrivito.provideUiConfig(TextWidget, {
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

  /*
  customGroups: [
    {
      title: 'My Tab',
      component: 'MyWidgetTab',
    },
  ],
  */
});

