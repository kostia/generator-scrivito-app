export default class App extends React.Component {
  render() {
    return (
      <div>
        <Scrivito.React.CurrentPage />

        <Scrivito.React.NotFoundErrorPage />
        <Scrivito.React.InternalErrorPage />
      </div>
    );
  }
}
