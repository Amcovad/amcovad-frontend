import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AttentionIcon } from '@/public/assets/dashboard/navBarIcon'

const AttentionCard = () => {
    return (
        <div className="p-2">
            <div className="relative bg-primary-500 h-[300px] rounded-md w-full  bg-contain md:bg-none lg:bg-[url('/assets/dashboard/Vector.png')] bg-bottom bg-no-repeat bg-[url('/assets/dashboard/Vector.png')] p-7">
                <div className="flex items-center justify-between cursor-pointer">
                    <p className="text-sm text-white">Today</p>
                    <AttentionIcon />
                </div>
                <div className="py-3">
                    <div className="flex items-center mt-4 -space-x-3">
                        <div className="">
                            <Image className="w-10 h-10 m-auto rounded-full border-2 hover:z-20  border-white" width={40} height={40} objectFit="cover" src="/assets/dashboard/User-image3.jpg" alt="user avatar3" />
                        </div>
                        <div className="">
                            <Image className="w-10 h-10 m-auto rounded-full border-2 hover:z-20 border-white" width={40} height={40} objectFit="cover" src="/assets/dashboard/User-image4.jpg" alt="user avatar4" />
                        </div>
                        <div className="">
                            <Image className="w-10 h-10 m-auto rounded-full  border-2 hover:z-20 border-white" width={40} height={40} objectFit="cover" src="/assets/dashboard/User-image5.jpg" alt="user avatar5" />

                        </div>
                        <div className="">
                            <Image className="w-10 h-10 m-auto rounded-full border-2 hover:z-40 border-white" width={40} height={40} objectFit="cover" src="/assets/dashboard/User-image6.jpg" alt="user avatar6" />
                        </div>

                    </div>
                    <div className=" text-white mt-3 ">
                        <p className=" text-xl font-semibold">Ajo with Friend</p>
                        <p className="text-sm">Payment of your turn with Frank and Jamal</p>
                    </div>
                </div>
                <Link href="" passHref>
                    <a>
                        <p className="text-sm text-secondary-100 hover:text-secondary-200 border-b border-secondary-100 absolute bottom-8">View Details</p>

                    </a>
                </Link>
            </div>
        </div>
    )
}

export default AttentionCard