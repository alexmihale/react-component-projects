import React, { useState } from 'react';
import JobDescription from '../JobDescription/JobDescription';
import JobTitle from '../JobTitle/JobTitle';
import './ExperienceContent.scss';

const ExperienceContent = (props) => {
  const [currentActive, setCurrentActive] = useState(props.active);

  const activeTitle = (index) => {
    let state = [];
    props.active.map((act, index) => {
      return (state[index] = { active: false });
    });
    state[index] = { active: true };
    setCurrentActive(state);
  };

  return (
    <div className={`content`}>
      <div className={`content__jobs`}>
        {props.jobs.map((job, index) => (
          <JobTitle
            key={index}
            job={job.job}
            isActiveSate={currentActive[index].active}
            onClick={() => activeTitle(index)}
          />
        ))}
      </div>
      <div className={`content__description`}>
        {props.jobs.map((job, index) => (
          <JobDescription
            key={index}
            job={job}
            isActiveState={currentActive[index].active}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
