import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

const NewTemplateCard = ({ userName, backGround, borderColor, created, icon, textColor, title, url }) => {
    return (

        <>
            {
                created === true ?
                    <div className={classNames("relative w-1/2 lg:w-1/4 border m-0.5 flex flex-col  items-center justify-center transition duration-500 hover:scale-105 cursor-pointer rounded-md  h-40 lg:h-52", backGround, borderColor)}>
                        <Link href={url} passHref>
                            <a className="absolute top-3 lg:top-5 left-2">
                                <p className={classNames("w-[6.25rem] text-left text-sm font-bold mt-2", textColor)}>{title}</p>
                            </a>
                        </Link>

                        <div className="flex items-center absolute bottom-3 left-2 gap-2">
                            <span className="w-10 h-10 rounded-full">
                                <Image className="w-10 h-10 rounded-full border-2 border-white" width={40} height={40} objectFit="cover" src={icon} alt="Template Created User Avatar" />
                            </span>
                            <div className="pb-1">
                                <p className="text-xs leading-3 text-secondary-800 pt-2 py-1">{userName}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={classNames(" w-1/2 lg:w-1/4 border m-0.5 flex flex-col  items-center justify-center transition duration-500 hover:scale-105 cursor-pointer rounded-md  h-40 lg:h-52", backGround, borderColor)}>
                        <Link href={url} passHref>
                            <a className=" flex flex-col  items-center justify-center">
                                <Image src={icon} className="text-center" width={24} height={24} alt="new template" />
                                <p className={classNames("w-32 text-center text-sm font-bold mt-3", textColor)}>{title}</p>
                            </a>
                        </Link>
                    </div>
            }
        </>


    );
};

NewTemplateCard.propTypes = {
    backGround: PropTypes.string,
    borderColor: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    url: PropTypes.string
};

NewTemplateCard.defaultProps = {
    backGround: "bg-primary-25",
    borderColor: "border-primary-100",
    icon: null,
    textColor: "text-primary-600",
    url: "/"
};

export default NewTemplateCard;
