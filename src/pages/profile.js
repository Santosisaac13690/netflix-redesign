import React from 'react' 
import { BrowserRouter, Routes, Route } from "react-router-dom";

const profile = () => {
  return (
    <>
    <div>

<title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="profile.css"/>

        <div class="WhoIsWatching"/>
        <div class="logo-section">
            <a href="#"><img src="123.png" alt ="logo"/></a>
        </div>
        
        <div class="main-div">
            <h1>Who's Watching?</h1>
            <div class="memberDiv">
                <button class="btn"><span>person1</span></button>
                <button class="btn"><span>person2</span></button>
                <button class="btn"><span>person3</span></button>
                <button class="addIcon"><i class="fas fa-plus-circle"></i><span>Add Profile</span></button>
            </div>
            <button class="manageProfile">manage Profile</button>
        </div>
    </div>
    </>
  )
}

export default profile