import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { newActionsData, suggestedFeedData } from '@/data/dashboard/index';
import { ActivityFeedCard, AttentionCard, NewActionCard, TimelineCard, SuggestedFeedCard, WidgetCard } from '@/components/dashboard/component/index';

import NewFriendToast from '@/components/dashboard/NewFriendToast';

function Dashboard() {
  return (
    <>
      <DashboardLayout title="Welcome Haruna,"
        sideWidget={
          <>
            <div className="hidden lg:block">
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
        }
      >
        <>
          <NewFriendToast />
          <div className="items-center lg:gap-x-2 xl:gap-x-3 hidden lg:flex py-4 lg:pr-10 remove-right-padding xl:pr-0 pt-6">
            {newActionsData.map(({ backGround, icon, title, textColor, borderColor }, index) => {
              return (
                <NewActionCard
                  key={index}
                  backGround={backGround}
                  title={title}
                  icon={icon}
                  textColor={textColor}
                  borderColor={borderColor}
                />
              );
            })}

          </div>
          <div className="flex items-center lg:hidden gap-x-4 pb-4 px-2 lg:pt-6">
            {newActionsData.slice(0, 2).map(({ backGround, icon, title, textColor, borderColor }, index) => {
              return (
                <NewActionCard
                  key={index}
                  backGround={backGround}
                  title={title}
                  icon={icon}
                  textColor={textColor}
                  borderColor={borderColor}
                />
              );
            })}
          </div>
          <div className="lg:hidden block">
            <AttentionCard />
          </div>
          <div className="hidden lg:flex">
            <TimelineCard />
          </div>
          <TimelineCard />
        </>

      </DashboardLayout>
    </>
  );
}

export default Dashboard;