import React from 'react' 
import { BrowserRouter, Routes, Route } from "react-router-dom";

const profile = () => {
  return (
    <div class="manageprofiles">

    <div class= "accounts">
      <h1>Who's Watching?</h1>
      <div class= "profiles">
        <button class="btn"><span>Person1</span></button>
        <button class="btn"><span>Person2</span></button>
        <button class="btn"><span>Person3</span></button>
        <button class="btn"><span>Person4</span></button>
      </div>
      <button class="manageprof">Manage Profiles</button>
    </div>
    </div>
  )
}

export default profile