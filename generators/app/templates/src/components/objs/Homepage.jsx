import Homepage from 'models/objs/Homepage';

Scrivito.provideComponent(Homepage, ({ page }) =>
  <div>
    <Scrivito.ContentTag tag="h1" content={ page } attribute="title" />
    <Scrivito.ContentTag content={ page } attribute="content" />
  </div>
);
