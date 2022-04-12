import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FulfilmentTimeline = ({ bgColor, fullTime, textColor, timeStart, timeEnd, timeLine }) => {
  return (
    <section className="flex items-start mb-2 rounded justify-between py-2 px-2 ">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center justify-center font-Inter ">
          <div className="flex flex-col justify-between pr-3">
            <p className="text-amcovad-secondary-500 order-first text-xs mb-3 font-medium ">{timeStart}</p>

            <p className="text-amcovad-secondary-500 order-last text-xs mt-3 font-medium ">{timeEnd}</p>
          </div>
          <div className={classNames('w-screen lg:w-full p-2 pr-6 rounded', bgColor)}>
            <p className={classNames('pb-1 text-[13px] font-semibold flex-wrap', textColor)}>
              {timeLine}
              <p className="text-amcovad-secondary-500 text-xs font-medium ">{fullTime}</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FulfilmentTimeline.propTypes = {
  bgColor: PropTypes.string,
  fullTime: PropTypes.string,
  textColor: PropTypes.string,
  timeStart: PropTypes.string,
  timeEnd: PropTypes.string,
  timeLine: PropTypes.string.isRequired
};

FulfilmentTimeline.defaultProps = {
  bgColor: null,
  fullTime: null,
  textColor: null,
  timeStart: null,
  timeEnd: null
};
export default FulfilmentTimeline;
