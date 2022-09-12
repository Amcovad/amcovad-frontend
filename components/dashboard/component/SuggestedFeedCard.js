import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types';

const SuggestedFeedCard = ({ image, title, subTitle, url }) => {
    return (
        <div className="pl-6 pr-5 py-5  border-b border-secondary-50 flex items-center gap-3">
            <div className="">
                <Image className="rounded w-12 h-12" width={48} height={48} objectFit="cover" src={image} alt="Suggested Avatar" />
            </div>
            <div className="pb-1">
                <Link href={url}>
                    <a>
                        <p className="text-xs leading-4 tracking-normal font-bold text-secondary-600">
                            {title}
                        </p>
                    </a>
                </Link>
                <p className="text-xs leading-3 text-secondary-600 pt-2 py-1">{subTitle}</p>
            </div>
        </div>
    )
}

SuggestedFeedCard.propTypes = {
    image: PropTypes.node,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    url: PropTypes.string
};

SuggestedFeedCard.defaultProps = {
    image: null,
    subTitle: "",
    url: ""
};

export default SuggestedFeedCard