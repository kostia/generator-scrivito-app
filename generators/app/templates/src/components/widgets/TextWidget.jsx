import TextWidget from 'models/widgets/TextWidget';

Scrivito.provideComponent(TextWidget, ({ widget }) => {
  let title;

  if (widget.get('title')) {
    title = <Scrivito.Content tag="h3" content={ widget } attribute="title" />;
  }

  return (
    <div>
      { title }
      <Scrivito.Content content={ widget } attribute="content" />
    </div>
  );
});
