import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

const NewActionCard = ({ backGround, borderColor, icon, textColor, title, url }) => {
    return (
        <div className={classNames(" w-1/2 lg:w-1/4 border m-0.5 flex flex-col  items-center justify-center transition duration-500 hover:scale-105 cursor-pointer rounded-md  h-40 lg:h-52", backGround, borderColor)}>
            <Link href={url} passHref>
                <a className=" flex flex-col  items-center justify-center">
                    <Image src={icon} className="text-center" width={24} height={24} alt="new action" />
                    <p className={classNames("w-32 text-center text-sm font-bold mt-3", textColor)}>{title}</p>
                </a>
            </Link>
        </div>
    );
};

NewActionCard.propTypes = {
    backGround: PropTypes.string,
    borderColor: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    url: PropTypes.string
};

NewActionCard.defaultProps = {
    backGround: "bg-primary-25",
    borderColor: "border-primary-100",
    icon: null,
    textColor: "text-primary-600",
    url: "/"
};

export default NewActionCard;
