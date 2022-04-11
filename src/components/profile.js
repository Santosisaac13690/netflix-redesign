import React from 'react' 
import { Link } from "react-router-dom";
import "./profile.css";



// const userimage1 = {
//   backgroundImage: `url(${user1})`
// }
// const userimage2 = {
//   backgroundImage: `url(${user2})`
// }
// const userimage3 = {
//   backgroundImage: `url(${user3})`
// };

const Profile = () => {
  return (
    <>
    <div>

<title>Document</title>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
    {/* <link rel="stylesheet" href="profile.css"/> */}

        <div className="WhoIsWatching"/>
        <div className="logo-section">
            <img src="./assets/images/123.png" alt ="logo"/>
        </div>
        
        <div className="main-div">
            <h1>Who's Watching?</h1>
            <div className="memberDiv">
                <Link to="/home"><img src="./assets/images/user1.png"/></Link>

                <Link to="/home"><img src="./assets/images/user2.png"/></Link>

                <Link to="/home"><img src="./assets/images/user3.png"/></Link>

                <button className="addIcon"><i className="fas fa-plus-circle"></i><span>Add Profile</span></button>

            </div>
            <button className="manageProfile">manage Profile</button>
        </div>
    </div>
    </>
  )
}

export default Profile