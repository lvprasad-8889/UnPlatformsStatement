import { useState } from "react";

const Follow = () => {
  const [state, setstate] = useState(false);

  const follow = () => {
    setstate(!state);
  };
  return (
    <div className="">
      <span>
        <h5>
          Horng H Chen
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
      <p className="text-muted">
        Alum | Finance,MBA | 2016 | Business Manager at Capgemini 1d | San
        Francisco
      </p>
    </div>
  );
};

export default Follow;
