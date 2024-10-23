import { useEffect, useState } from "react";

function Container({ children }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={`container py-5 ${
        animate ? "pop-animation" : ""
      } shadow-lg rounded`}
    >
      {children}
    </div>
  );
}

export { Container };
