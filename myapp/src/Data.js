import { useState } from "react";

const Data = () => {
  const [displayText, setdisplayText] = useState(false);
  const changeDisplay = () => {
    setdisplayText(!displayText);
  };
  return (
    <div className="">
      <p className="text-start ml-2 text-black-50">
        The concept of Research : A cross-cultural study
      </p>
      <p className="text-start ml-2">
        Oxford Nanopore has pulled in £100m from investors in the Aisa-Pacific
        region ,as it completes a funding round that values
        {!displayText && (
          <span>
            ...{" "}
            <span className="changeCursor text-primary" onClick={changeDisplay}>
              read more
            </span>
          </span>
        )}
        {displayText && (
          <span>
            {" "}
            the fast-growing UK biotechnology company at £1.5bn.{" "}
            <span
              className="changeCursor  text-primary"
              onClick={changeDisplay}
            >
              read less
            </span>
          </span>
        )}
      </p>
    </div>
  );
};

export default Data;
