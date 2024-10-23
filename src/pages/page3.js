import { useEffect, useState } from "react";
import "./Index1.css";
import { Container } from "../components/container";
import { TitleAndSub } from "../components/titleAndSub";
import { MessageDiv } from "../components/messagediv";
import { DateInput } from "../components/dateInput";

function Index3() {
  const [date1, setDate1] = useState("");
  const [message, setMessage] = useState("Please select the date");

  useEffect(() => {
    if (date1 === "") {
      setMessage("Please select the date");
    } else {
      let day1 = new Date(Date.now());
      let day2 = new Date(date1);
      let out = Math.ceil(Math.abs(day2 - day1) / (1000 * 60 * 60 * 24));
      setMessage(`${out} Day's left for ${new Date(date1).toDateString()}`);
    }
  }, [date1]);

  return (
    <Container>
      <TitleAndSub
        title={"Days left"}
        subTitle={
          "Determine how many days remain until a specific date from today."
        }
      />
      <DateInput
        label={"Select the date:"}
        onChange={(e) => {
          setDate1(e.target.value);
        }}
      />
      <MessageDiv message={message} />
    </Container>
  );
}

export default Index3;
