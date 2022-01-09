import "./Share.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./Redux";
import { toast } from "react-toastify";

function Share() {
  //getting complete data from store
  const fetchedData = useSelector((state) => state.data[0]);
  const dispatch = useDispatch();
  //message that user can confirm what action he did
  const notify = () => {
    toast("Shared successfully", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
    });
  };

  const changeShares = () => {
    //copying fetched data to modify shares
    let modifyShares = Object.assign({}, fetchedData);
    //incrementing the shares value
    modifyShares.shares++;
    //updating shares in the database
    axios
      .put("http://localhost:3001/server/upd", modifyShares)
      .then(
        //over writing in the store
        dispatch(actions.getData([modifyShares]))
      )
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <span className="ms-3">
      <img
        onClick={() => {
          changeShares();
          notify();
        }}
        src="/ShareIcon.png"
        width="25px"
        height="25px"
        className="changeCursor"
        alt=""
      />
    </span>
  );
}

export default Share;
