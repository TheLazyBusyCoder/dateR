function DateInput({ label, onChange, date }) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="form-group mb-4">
          <label className="fs-5" htmlFor="date1">
            {label}
          </label>
          <input
            type="date"
            id="date1"
            value={date}
            className="form-control"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export { DateInput };
