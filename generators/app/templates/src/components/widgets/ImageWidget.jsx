import ImageWidget from 'models/widgets/ImageWidget';

Scrivito.provideComponent(ImageWidget, ({ widget }) =>
  <Scrivito.ImageTag content={ widget } attribute="image" />
);
