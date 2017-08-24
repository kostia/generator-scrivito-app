function MyWidgetTab({ widget }) {
  return (
    <div>
      { widget.objClass }
    </div>
  );
}

Scrivito.registerComponent('MyWidgetTab', MyWidgetTab);
