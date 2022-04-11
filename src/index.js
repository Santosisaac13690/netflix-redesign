import React from "react";
import "./App.css";
import App from "./App"
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/popuplogin" element={<PopUpLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tvshows" element={<TVshows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/newandpopular" element={<Newandpopular />} />
        <Route path="/mylist" element={<Mylist />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
