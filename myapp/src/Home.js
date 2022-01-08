import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { UserProfile } from "./UserProfile";
function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-muted">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img src="/SocialBird.png" width="40px" height="40px" alt="" />
            ReactProject
          </Link>
          <Link to="/userprofile" >
            <img
              src="/userprofile.png"
              width="40px"
              height="40px"
              alt="Loading..."
            />
          </Link>

          
        </div>
      </nav>
    </div>
  );
}

export default Home;
