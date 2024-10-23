import { useEffect, useState } from "react";
import "./Index1.css";
import { DateInput } from "../components/dateInput";
import { TitleAndSub } from "../components/titleAndSub";
import { MessageDiv } from "../components/messagediv";
import { Container } from "../components/container";

function Index1() {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (date1 === "" && date2 === "") {
      setMessage("Please select both the date's");
    } else if (date2 === "") {
      setMessage("Please select second date");
    } else if (date1 === "") {
      setMessage("Please select firts date");
    } else {
      let day1 = new Date(date1);
      let day2 = new Date(date2);
      if (day1 < day2) {
        let timeDifference = Math.abs(day2 - day1);
        let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        setMessage(
          `Number of days between ${day1.toDateString()} and ${day2.toDateString()} is ${dayDifference} Day's`
        );
      } else {
        setMessage("Please make sure date 1 is smaller then date 2");
      }
    }
  }, [date1, date2]);

  return (
    <Container>
      <TitleAndSub
        title={"Number of Days Calculator"}
        subTitle={
          "Select two dates to calculate how many days have passed between them."
        }
      />
      <DateInput
        date={date1}
        label={"First Date: "}
        onChange={(e) => setDate1(e.target.value)}
      />
      <DateInput
        label={"Second date:"}
        onChange={(e) => setDate2(e.target.value)}
      />
      <MessageDiv message={message} />
    </Container>
  );
}

export default Index1;
