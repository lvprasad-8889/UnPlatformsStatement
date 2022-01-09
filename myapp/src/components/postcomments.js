import axios from "axios";
import { useState } from "react";
import { actions } from "./Redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./postcomments.css";

const PostComments = () => {
  //getting Id from store
  const getId = useSelector((state) => state.data[0].id);
  //array of comments getting from store
  const allcommentsData = useSelector((state) => state.commentsData);
  const dispatch = useDispatch();

  const [comment, setcomment] = useState("");
  const [visibility, setvisibility] = useState(true);

  function handleChange(event) {
    setcomment(event.target.value);
    if (event.target.value.trim().length > 0) {
      //enabling user to submit data
      setvisibility(false);
    } else if (event.target.value.trim().length === 0) {
      //not enabling user to submit data
      setvisibility(true);
    }
  }
  //submitting data
  function handleSubmit(event) {
    //preventing page to refresh
    event.preventDefault();
    //converting date object to string
    const dateObject = new Date().toLocaleString();

    const commentsObject = {
      timeStamp: dateObject,
      comment: comment.trim(),
    };
    //adding old comments and new comment
    const completeCommentData = [...allcommentsData, commentsObject];

    //adding comments to the database
    axios
      .put(`http://localhost:3001/server/edit/${getId}`, completeCommentData)
      .then((message) => {
        toast("Comment added successfully", {
          position: toast.POSITION.TOP_RIGHT,
          type: toast.TYPE.SUCCESS,
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error("error in updating comments to server : ", err);
      });

    //over writing data in the store
    dispatch(actions.getCommentData(completeCommentData));
    setcomment("");
    setvisibility(true);
  }

  return (
    <div className="">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-9 mb-4">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          {!visibility && (
            <button
              className="btn mb-4 btn-outline-info "
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      {allcommentsData.length > 0 &&
        allcommentsData.map((printData, index) => (
          <div className="row" key={index}>
            <div className="">
              <div className="col-md-12">
                <div className="card mb-3" id="cardEffect">
                  <div className="card-body text-start">
                    <p>{printData.comment}</p>
                    <span>
                      <span className="dot">
                        <i className="fas fa-paper-plane"></i>{" "}
                      </span>
                      {printData.timeStamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {allcommentsData.length === 0 && (
        <div className="row">
          <div className="col-md-12 changeFontSize mb-3">
            Be the first to add a comment
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComments;
