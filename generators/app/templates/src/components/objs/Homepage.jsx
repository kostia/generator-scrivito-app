import Homepage from 'models/objs/Homepage';

Scrivito.provideComponent(Homepage, ({ page }) =>
  <div>
    <Scrivito.React.Content tag="h1" content={ page } attribute="title" />
    <Scrivito.React.Content content={ page } attribute="content" />
  </div>
);
