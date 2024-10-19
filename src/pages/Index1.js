import "./Index1.css";

function Index1() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
          <h1 className="">This will give you number of days passed.</h1>
          <ol className="text-bold fw-bold fs-5">
            <li>Select first date</li>
            <li>Select second date</li>
            <li>Press Enter</li>
          </ol>
        </div>
        <div className="col">
          <input
            type="date"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            className="customeDate"
          />
        </div>
      </div>
    </div>
  );
}

export default Index1;
