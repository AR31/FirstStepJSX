import React from "react";
import myImg from "./SectmageInSrc.jpg";
import "./App.css";

function App() {
  return (
    <div className="container-div">
      <h1 className="title-red">Your name here</h1>
      <br />
      <img src={myImg}></img>
      <br />
      <img src="/imageInPublic.jpg"></img>
      <video controls className="video-block">
        <source src="myVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
