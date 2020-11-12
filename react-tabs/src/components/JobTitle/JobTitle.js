import React from 'react';
import './JobTitle.scss';

const JobTitle = (props) => {
  let activeBorder = '';

  if (props.isActiveSate) {
    activeBorder = <div className={`jobtitle__container-border`}></div>;
  } else {
    activeBorder = '';
  }

  return (
    <>
      <div className={`jobtitle__container`}>
        {activeBorder}
        <h1
          className={
            props.isActiveSate
              ? `jobtitle__container-title--active`
              : `jobtitle__container-title`
          }
          onClick={props.onClick}
        >
          {props.job}
        </h1>
      </div>
    </>
  );
};

export default JobTitle;
