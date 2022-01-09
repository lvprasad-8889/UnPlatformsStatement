import { useState } from "react";
import PostData from "../PostData.json";
const Follow = () => {
  const [state, setstate] = useState(false);

  const follow = () => {
    setstate(!state);
  };
  return (
    <div className="">
      <span>
        <h5>
          {PostData[0].username}
          {!state && (
            <button className="btn btn-outline-info ms-2  " onClick={follow}>
              Follow
            </button>
          )}
          {state && (
            <button className="btn btn-outline-info ms-2" onClick={follow}>
              Following
            </button>
          )}
        </h5>
      </span>
      <p className="text-muted">{PostData[0].personalInfo}</p>
    </div>
  );
};

export default Follow;
