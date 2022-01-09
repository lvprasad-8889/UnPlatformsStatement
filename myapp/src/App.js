import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useEffect } from "react";
import ReactProject from "./ReactProject";
import UserProfile from "./UserProfile.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { actions } from "./Redux";
import { useDispatch } from "react-redux";

toast.configure();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/server/completedata")
      .then((res) => {
        if (res.data.length === 0) {
          axios.post("http://localhost:3001/server/new").then((response) => {
            dispatch(actions.getData([response.data]));
            axios
            .put("http://localhost:3001/server/put", {
              id: response.data.id,
              views: response.data.views + 1,
            })
            .then((res) => {
              //console.log(res);
            })
            .catch((err) => {
              console.log("error in updating views : ", err);
            });
          })
          .catch(err=>{
            console.log("error in creating new data : ",err)
          })
        } else {
          dispatch(actions.getData(res.data));
          dispatch(actions.getCommentData(res.data[0].comments));
          axios
            .put("http://localhost:3001/server/put", {
              id: res.data[0].id,
              views: res.data[0].views + 1,
            })
            .then((res) => {
              //console.log(res);
            })
            .catch((err) => {
              console.log("error in updating views : ", err);
            });
        }
      })
      .catch((err) => {
        console.log("error in fetching to root file : ", err);
      });
  }, [dispatch]);

  return (
    <div className="">
      <Home></Home>
      <main>
        <Routes>
          <Route path="/" element={<ReactProject />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
