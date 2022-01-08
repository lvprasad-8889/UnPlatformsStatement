import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./Like.css";

import { actions } from "./Redux";
function Like(){
  const [like, setLike] = useState(false);
  const fetchedData=useSelector(state=>state.data[0]);
  const dispatch=useDispatch();
  const [messageFromLikeServer, setMessage] = useState('')
  const listen = () => {
    //var audio = new Audio('/audioOnLike.mpeg');
    //audio.play();
    setLike(!like);
    if(!like){
      let modifyLikes=Object.assign({},fetchedData);
    modifyLikes.likes++;
    
    axios.put("http://localhost:3001/server/upd",
      modifyLikes
    ).then((message)=>{
  
      dispatch(actions.getData([modifyLikes]))
    })
    .catch((err)=>{
      console.log(err)
    })
    }
    else{
      let modifyLikes=Object.assign({},fetchedData);
    modifyLikes.likes--;
    axios.put("http://localhost:3001/server/upd",
      modifyLikes
    ).then((message)=>{
      setMessage(message["data"])
      dispatch(actions.getData([modifyLikes]))
    })
    .catch((err)=>{
      console.log(err)
    })
    if(messageFromLikeServer==="success"){
      toast("Liked added successfully",{
        position:toast.POSITION.TOP_RIGHT,
        type:toast.TYPE.SUCCESS,
        autoClose:2000
      
      })
    }
    }
  
  };

  
 
 return(
  <span className="">
    {
    !like && (
      <span className="btn changeCurser"  onClick={listen}>
        <i className="far fa-thumbs-up changeColour"></i> Like
      </span>
    )
  }
  {
    like && (
      <span className="btn changeCurser " onClick={()=>{listen()}}>
        <i className="fas fa-thumbs-up fa-1x changeColour"></i> Liked
      </span>
    )
  }
  </span>
 );
};

export default Like;
