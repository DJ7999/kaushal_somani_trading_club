import React from "react";
import Banner from "./components/Banner";
import "./App.css"; 
import Offerings from "./components/Offerings";
import SocialMediaLinks from "./components/SocialMediaLinks";
import UserFeedback from "./components/UserFeedback";
import AboutFounder from "./components/AboutFounder";
function App() {
  return (
    <div>
      <Banner />
      <Offerings/>
      <AboutFounder/>
      <UserFeedback/>
      <SocialMediaLinks/>
    </div>
  );
}

export default App;
