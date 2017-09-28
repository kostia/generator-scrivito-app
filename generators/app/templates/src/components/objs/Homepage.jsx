import Homepage from 'models/objs/Homepage';

Scrivito.provideComponent(Homepage, ({ page }) =>
  <div>
    <Scrivito.Content tag="h1" content={ page } attribute="title" />
    <Scrivito.Content content={ page } attribute="content" />
  </div>
);
