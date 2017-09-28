export default class App extends React.Component {
  render() {
    return (
      <div>
        <Scrivito.CurrentPage />

        <Scrivito.NotFoundErrorPage />
        <Scrivito.InternalErrorPage />
      </div>
    );
  }
}
