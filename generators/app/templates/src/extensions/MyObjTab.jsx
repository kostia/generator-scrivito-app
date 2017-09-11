function MyObjTab({ obj }) {
  return (
    <div>
      { obj.objClass }
    </div>
  );
}

Scrivito.registerComponent('MyObjTab', MyObjTab);
