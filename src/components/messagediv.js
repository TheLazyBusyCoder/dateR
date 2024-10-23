function MessageDiv({ message }) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <h4 className="text-dark">{message}</h4>
      </div>
    </div>
  );
}

export { MessageDiv };
