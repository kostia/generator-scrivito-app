Scrivito.provideComponent('TextWidget', ({ widget }) => {
  let title;

  if (widget.get('title')) {
    title = <Scrivito.ContentTag tag="h3" content={ widget } attribute="title" />;
  }

  return (
    <div>
      { title }
      <Scrivito.ContentTag content={ widget } attribute="content" />
    </div>
  );
});
