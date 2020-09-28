import React from "react";
import MainContent from "../../Components/MainContent/MainContent";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import OnTheWeb from "../OnTheWeb/OnTheWeb";
import ContactPage from "../ContactPage/ContactPage";
import Footer from "../Footer/Footer";
import ProjectsTap from "../../Components/ProjectsTap/ProjectsTap";

const HomePage = () => {
  return (
    <div>
      <MainContent />
      <ProjectsPage />
      <OnTheWeb />
      <ContactPage />
      <Footer />
      <ProjectsTap />
    </div>
  );
};

export default HomePage;
