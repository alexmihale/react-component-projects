import React from 'react';
import ExperienceContent from '../../components/ExperienceContent/ExperienceContent';
import './Experience.scss';

const Experience = (props) => {
  return (
    <div className={`experience`}>
      <div className={`experience__header`}>
        <h1 className={`experience__header-title`}>{props.title}</h1>
        <div className={`experience__header-border`}></div>
      </div>

      <div className={`experience__content`}>
        <ExperienceContent jobs={props.jobs} active={props.active} />
      </div>
    </div>
  );
};

export default Experience;
