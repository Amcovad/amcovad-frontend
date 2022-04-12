import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';

const CreateCard = ({ backgroundColor, fourColumn, icon, title, threeColumn, url }) => {
  return (
    <section
      className={classNames(
        'w-full  transition duration-500 hover:scale-105 ',
        { 'lg:w-3/12': threeColumn },
        { 'lg:w-4/12': fourColumn }
      )}
    >
      <div className="p-2">
        <div className="rounded-[0.625rem]" style={{ backgroundColor: `${backgroundColor}` }}>
          <div className="p-4 py-8">
            <Link href={url} passHref>
              <a>
                <div className="flex justify-center pt-4 ">{icon}</div>
                <div className="px-4 py-2">
                  <p className="font-Inter font-medium text-base text-center leading-7 cursor-pointer text-amcovad-secondary-500">
                    {title}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

CreateCard.propTypes = {
  backgroundColor: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};

CreateCard.defaultProps = {
  backgroundColor: null,
  icon: null,
  title: null
};
export default CreateCard;
