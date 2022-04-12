import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";



const Profile = () => {
  return (
    <>
      <div className="WhoIsWatching">
        <title>Document</title>
        <div className="logo-section">
          <img src="./assets/images/123.png" alt="logo" />
        </div>

        <div className="main-div">
          <h1>Who's Watching?</h1>
          <div className="memberDiv">
            <Link to="/home">
              <img src="./assets/images/user1.png" alt="user1"/>
            </Link>

            <Link to="/home">
              <img src="./assets/images/user2.png" alt="user2"/>
            </Link>

            <Link to="/home">
              <img src="./assets/images/user3.png" alt="user3"/>
            </Link>

            <button className="addIcon">
              <i className="fas fa-plus-circle"></i>
              <span>Add Profile</span>
            </button>
          </div>
          <button className="manageProfile">manage Profile</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
