import { useState } from "react";
import PostData from "../PostData.json";

const Data = () => {
  const [displayText, setdisplayText] = useState(false);
  const changeDisplay = () => {
    setdisplayText(!displayText);
  };
  return (
    <div className="">
      <p className="text-start ml-2 text-black-50">{PostData[0].title}</p>
      <p className="text-start ml-2">
        {PostData[0].description}
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
            {PostData[0].descriptionContinuation}{" "}
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
