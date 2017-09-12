import ImageWidget from 'models/widgets/ImageWidget';

Scrivito.provideComponent(ImageWidget, ({ widget }) =>
  <Scrivito.React.Image src={ widget } />
);
