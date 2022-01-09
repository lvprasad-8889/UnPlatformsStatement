import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./Like.css";

import { actions } from "./Redux";
function Like() {
  const [like, setLike] = useState(false);
  const fetchedData = useSelector((state) => state.data[0]);
  const dispatch = useDispatch();
  const listen = () => {
    setLike(!like);
    //if (!like) {
      let modifyLikes = Object.assign({}, fetchedData);
      modifyLikes.likes++;
      console.log(modifyLikes)
      axios.put("http://localhost:3001/server/upd", modifyLikes)
        .then((message) => {
          toast("Liked added successfully", {
            position: toast.POSITION.TOP_RIGHT,
            type: toast.TYPE.SUCCESS,
            autoClose: 2000,
          });
          dispatch(actions.getData([modifyLikes]));
        })
        .catch((err) => {
          console.log("error in updating likes : ",err);
        });
    //} 
    // else {
    //   let modifyLikes = Object.assign({}, fetchedData);
    //   modifyLikes.likes--;
    //   axios.put("http://localhost:3001/server/upd", modifyLikes)
    //     .then((message) => {
    //       dispatch(actions.getData([modifyLikes]));
    //     })
    //     .catch((err) => {
    //       console.log("error in updating likes : ",err);
    //     });
    // }
  };

  return (
    <span className="">
        <span className="btn changeCurser" onClick={listen}>
          <i className="far fa-thumbs-up changeColour"></i> Like
        </span>
      
      {/* {like && (
        <span
          className="btn changeCurser "
          onClick={() => {
            listen();
          }}
        >
          <i className="fas fa-thumbs-up fa-1x changeColour"></i> Liked
        </span>
      )} */}
    </span>
  );
}

export default Like;
