import React from 'react';
import './JobDescription.scss';

const JobDescription = (props) => {
  if (props.isActiveState) {
    return (
      <div className={`description__container`}>
        <div className={`description__header`}>
          <div className={`description__header-title`}>{props.job.title}</div>
          <div className={`description__header-time`}>
            {props.job.startDate} - {props.job.endDate}
          </div>
        </div>
        <div className={`description__content`}>
          {props.job.description.map((description, index) => {
            return (
              <div key={index} className={`description__content-paragraph`}>
                <div className={`description__content-paragraph-svg`}></div>

                <div className={`description__content-paragraph-text`}>
                  {description}
                </div>
              </div>
            );
          })}
        </div>
        <div className={`description__footer`}>
          <a href='#' className={`description__footer-button`}>
            <span className={`description__footer-button-text`}>More Info</span>
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default JobDescription;
