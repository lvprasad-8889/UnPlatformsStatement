import { useState } from "react";
import './Comment.css'
import { useDispatch } from "react-redux";
import { actions } from "./Redux";
function Comment(){
    const dispatch=useDispatch();

    const changeDisplayofComment=()=>{
      dispatch(actions.getComment())
    }
    return(
        <span className="">
            <img onClick={changeDisplayofComment} className="changeCursor" src="/commentIcon.png" width="25px" height="25px" alt="comment Loading.." />
        </span>
        )
}
export default Comment;