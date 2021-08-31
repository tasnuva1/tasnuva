import React, { useEffect, useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import OnTheWeb from '../OnTheWeb/OnTheWeb';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';
import SubNavigation from '../../Components/SubNavigation/SubNavigation.jsx';
import StartingLoader from '../../Components/StartingLoader/StartingLoader';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3300);
  });

  return (
    <div>
      {isLoading === true ? (
        <StartingLoader />
      ) : (
        <div>
          <MainContent />
          <ProjectsPage />
          <OnTheWeb />
          <ContactPage />
          <Footer />
          <SubNavigation />
        </div>
      )}
    </div>
  );
};

export default HomePage;
