import { useEffect, useState } from "react";
import "./Index1.css";
import { Container } from "../components/container";
import { TitleAndSub } from "../components/titleAndSub";
import { DateInput } from "../components/dateInput";
import { MessageDiv } from "../components/messagediv";

function Index2() {
  const [date1, setDate1] = useState("");
  const [nod, setNod] = useState(0);
  const [message, setMessage] = useState("Please select date");

  useEffect(() => {
    if (date1 === "") {
      setMessage("Please select date");
    } else if (nod === 0) {
      setMessage("Please enter number of days");
    } else {
      let day1 = new Date(date1);
      day1.setDate(day1.getDate() + Number.parseInt(nod));
      let day2 = new Date(date1);
      day2.setDate(day2.getDate() - Number.parseInt(nod));
      setMessage(
        `Adding ${nod} Day's: ${day1.toDateString()}, Substracting ${nod} Day's: ${day2.toDateString()}`
      );
    }
  }, [date1, nod]);

  return (
    <Container>
      <TitleAndSub
        title={"Add or Substract"}
        subTitle={
          "Add or subtract 'x' number of days from a date to see what the date will be."
        }
      />
      <DateInput
        date={date1}
        label={"First Date: "}
        onChange={(e) => setDate1(e.target.value)}
      />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group mb-4">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Number of days
              </span>
              <input
                value={nod}
                onChange={(e) => {
                  setNod((v) => e.target.value);
                }}
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <MessageDiv message={message} />
    </Container>
  );
}

export default Index2;
