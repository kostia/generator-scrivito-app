import ImageWidget from 'models/widgets/ImageWidget';

Scrivito.provideComponent(ImageWidget, ({ widget }) =>
  <Scrivito.Image content={ widget } attribute="image" />
);
