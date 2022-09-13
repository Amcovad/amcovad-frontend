import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types';

const WidgetCard = ({ children, title, url }) => {
    return (
        <div className="py-2 m-2 ">
            <div className="bg-white border border-secondary-50 rounded-md ">
                <div className="flex items-center border-b border-secondary-50 justify-between p-6">
                    <p className="text-base font-semibold leading-6 text-secondary-800">{title}</p>
                    <Link href={url}>
                        <a>
                            <p className="text-xs leading-normal tracking-wide font-bold cursor-pointer text-right text-primary-500">See all</p>
                        </a>
                    </Link>
                </div>
                {children}
            </div>
        </div>
    )
}


WidgetCard.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

WidgetCard.defaultProps = {
    children: null,
    url: ""
};

export default WidgetCard