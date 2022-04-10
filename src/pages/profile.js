import React from 'react' 
import { Link } from "react-router-dom";
import "./css/profile.css";

const Profile = () => {
  return (
    <>
    <div>

<title>Document</title>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
    {/* <link rel="stylesheet" href="profile.css"/> */}

        <div className="WhoIsWatching"/>
        <div className="logo-section">
            <a href="#"><img src="123.png" alt ="logo"/></a>
        </div>
        
        <div className="main-div">
            <h1>Who's Watching?</h1>
            <div className="memberDiv">
                <Link to="App"><button className="btn"><span>person1</span></button></Link>
                <Link to="App"><button className="btn"><span>person2</span></button></Link>
                <Link to="App"><button className="btn"><span>person3</span></button></Link>
                <button className="addIcon"><i className="fas fa-plus-circle"></i><span>Add Profile</span></button>
            </div>
            <button className="manageProfile">manage Profile</button>
        </div>
    </div>
    </>
  )
}

export default Profile