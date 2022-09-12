import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Image from 'next/image';
import Link from 'next/link';
import { ActivityFeedCard, AttentionCard, SuggestedFeedCard, NewTemplateCard, WidgetCard } from '@/components/dashboard/component';
import { suggestedFeedData, TemplateData } from '@/data/dashboard';


function Transaction() {
    return (
        <>
            <DashboardLayout title="" sideWidget={
                <>
                    <div className="hidden mt-7 lg:block">
                        <AttentionCard />

                        <WidgetCard title="Activity Feed">
                            <ActivityFeedCard />
                            <ActivityFeedCard />
                            <ActivityFeedCard />
                        </WidgetCard>
                    </div>
                    <div className=" mb-10 lg:mb-[156px]">
                        <WidgetCard title="Suggested for you">
                            {suggestedFeedData.map(({ subTitle, image, title, url }, index) => {
                                return (
                                    <SuggestedFeedCard
                                        key={index}
                                        subTitle={subTitle}
                                        title={title}
                                        image={image}
                                        url={url}
                                    />
                                );
                            })}
                        </WidgetCard>
                    </div>
                </>
            }>
                <section className="">
                    <div className="items-center lg:gap-x-2 xl:gap-x-3 hidden lg:flex pb-4 lg:pr-10 remove-right-padding xl:pr-0">
                        {TemplateData.map(({ backGround, created, icon, title, textColor, borderColor, userName }, index) => {
                            return (
                                <NewTemplateCard
                                    key={index}
                                    borderColor={borderColor}
                                    backGround={backGround}
                                    created={created}
                                    title={title}
                                    icon={icon}
                                    textColor={textColor}
                                    userName={userName}
                                />
                            );
                        })}

                    </div>

                    <h1 className="text-2xl pl-3 lg:pl-0 leading-9 font-Poppins mb-5 mt-3 lg:text-3xl lg:font-Inter lg:leading-10 font-bold text-secondary-800 ">
                        Templates
                    </h1>
                    <div className="flex items-center lg:hidden gap-x-4 pb-4 px-2 lg:pt-6">
                        {TemplateData.slice(0, 2).map(({ backGround, created, icon, title, textColor, borderColor, userName }, index) => {
                            return (
                                <NewTemplateCard
                                    key={index}
                                    borderColor={borderColor}
                                    backGround={backGround}
                                    created={created}
                                    title={title}
                                    icon={icon}
                                    textColor={textColor}
                                    userName={userName}
                                />
                            );
                        })}
                    </div>
                    <div className="m-2 px-4 pt-10 lg:pt-20 mx-auto max-w-7xl ">

                        <div className="w-full mx-auto lg:w-2/3">
                            <div className="flex justify-center items-center">
                                <div>
                                    <div className=" pl-12 lg:pl-16 object-center">
                                        <Image src="/assets/dashboard/no-templates.png" width={306} height={245} alt="Templates Page Image" />
                                    </div>
                                    <p className="text-secondary-500 my-4 text-center font-bold text-xl lg:text-2xl">No Template created yet!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DashboardLayout>
        </>
    );
}

export default Transaction;
