function TitleAndSub({ title, subTitle }) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h1 className="mb-4 d-md-block d-sm-none d-none display-6">{title}</h1>
        <p className="lead ">{subTitle}</p>
      </div>
    </div>
  );
}

export { TitleAndSub };
