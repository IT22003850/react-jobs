import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs/>
    </div>
  );
};

export default App;
