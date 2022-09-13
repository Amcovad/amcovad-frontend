import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserProfileCard = () => {
    return (
        <section>
            <div className="relative mt-2 ">
                <Image src="/assets/dashboard/User-Background-Image.svg" width={289} height={72} alt="banner" className="h-16 object-cover" />
            </div>

            <div className="relative pb-2 pt-14">
                <div className="absolute flex flex-col left-1/2 top-3 z-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <figure className="relative border-4 border-secondary-25 rounded-md">
                        <Image src="/assets/dashboard/User-image.jpg" objectFit="cover" width={72} height={72} alt="avatar" className="" />
                    </figure>
                </div>
                <div className="text-center w-full font-Inter">
                    <p className="text-primary-900 text-lg  font-semibold">Aliyy Adams</p>

                    <div className="flex items-center justify-center gap-2">
                        <Image src="/assets/dashboard/star.svg" width={20} height={20} alt="rating star" />
                        <p className="font-bold text-secondary-800"> 4.5</p>
                    </div>

                </div>
                <div className="text-center px-4 lg:px-5">
                    <div className="border-secondary-50 flex py-5 text-secondary-700 font-Inter flex-wrap items-center justify-center border-b ">
                        <Link href="">
                            <a className="border-secondary-50 w-1/2 rounded-l-xl border-r py-1">
                                <p className="text-base font-bold">18</p>
                                <p className="font-medium tracking-tight">Transactions</p>
                            </a>
                        </Link>
                        <Link href="">
                            <a className="border-secondary-50 w-1/2 py-1 ">
                                <p className="text-base font-bold">250</p>
                                <p className="font-medium tracking-tight">Connections</p>
                            </a>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default UserProfileCard