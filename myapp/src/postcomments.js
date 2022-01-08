import axios from "axios";
import { useState } from "react";
import { actions } from "./Redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PostComments = () => {
  const allcommentsData = useSelector((state) => state.commentsData);
  const [messageFromCommentServer,setMessage]=useState('');
  const dispatch = useDispatch();

  const [comment, setcomment] = useState("");
  const [disableButton, setdisableButton] = useState(true)

  function handleChange(event) {
    setcomment(event.target.value);
    if(event.target.value.trim().length>0){
      setdisableButton(false)
    }
    else if(event.target.value.trim().length===0){
        setdisableButton(true)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const dateObject=new Date().toLocaleString();
    const commentsObject = {
      timeStamp: dateObject,
      comment: comment.trim(),
    };
    const completeCommentData=[...allcommentsData,commentsObject]

    axios
      .put("http://localhost:3001/server/edit/1", completeCommentData)
      .then((message) => {
          setMessage(message["data"])
      })
      .catch((err) => {
        console.error("error in updating comments to server", err);
      });

    dispatch(actions.getCommentData(completeCommentData));
    setcomment('')
    setdisableButton(true)
    if(messageFromCommentServer==="success"){
        toast("Comment added successfully",{
            position:toast.POSITION.TOP_RIGHT,
            type:toast.TYPE.SUCCESS,
            autoClose:2000
          
          })
    }
  }

  return (
    <div className="">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-10 mb-4">
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
        <div className="col-md-2">
          {!disableButton && <button
            className="btn mb-4 btn-outline-info "
            type="submit"
            value="Submit"
            
          >
            Submit
          </button>}
        </div>
      </form>
      {allcommentsData.map((printData,index)=>(
          <div className="" key={index}>
              <p>{printData.timeStamp}</p>
              <p>{printData.comment}</p>
          </div>
      ))}
    </div>
  );
};

export default PostComments;
