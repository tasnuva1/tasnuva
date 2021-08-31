import React from 'react';
import './ProjectsPage.scss';
import ProjectsTap from '../../Components/ProjectsTap/ProjectsTap';
import Headings from '../../Components/Headings/Headings';

const ProjectsPage = () => {
  return (
    <div className='projectspage' id='work'>
      <div className='projectpage-container'>
        <div className='projectpage-heading'>
          <Headings
            heading1='FEATURED PROJECTS —'
            heading2='Stuff I’ve Worked On'
          />
        </div>
        <ProjectsTap />
      </div>
    </div>
  );
};

export default ProjectsPage;
