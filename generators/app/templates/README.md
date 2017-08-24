# <%= appName %>

* Start Webpack for Scrivito:
  ```bash
  cd scrivito/js
  yarn && yarn start
  ```
* Start Webpack for App:
  ```bash
  cd path/to/this/app
  yarn && yarn start
  ```
* Open [localhost:8081/scrivito](http://localhost:8081/scrivito)

### Initializing the content

Once you're done with setup and you have a fresh tenant, you should initialize the content by
creating a homepage. In order to do that, please open the Scrivito UI by navigating to
http://localhost:8081/scrivito, create a fresh working copy, open the browser console, switch to
the application frame and run following script:

```js
Scrivito.getClass('Homepage').create({ _path: '/', title: 'Welcome to <%= appName %>!' });
```

Then please close the browser console and reload the page. Now you should see the homepage!
