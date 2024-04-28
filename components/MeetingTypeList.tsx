"use client";

import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModel from './MeetingModel';

const MeetingTypeList = () => {
    const Router = useRouter();

    const createMeeting = () => {}

    /* 
    Here also due to using typescript we have to specify the types in this case we have to specify the all the cases the "meetingState" can be.
    */
    const [meetingState, seTMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <HomeCard 
            img = '/icons/add-meeting.svg'
            className = 'bg-orange-1'
            title='New Meeting'
            description='Start an instant meeting'
            handleClick={() => seTMeetingState('isInstantMeeting')}
        />
        <HomeCard 
            img = '/icons/schedule.svg'
            className = 'bg-blue-700'
            title='Schedule Meeting'
            description='Plan your meeting.'
            handleClick={() => seTMeetingState('isScheduleMeeting')}
        />
        <HomeCard 
            img = '/icons/recordings.svg'
            className = 'bg-purple-1'
            title='Veiw Recordings'
            description='Check out your recordings.'
            handleClick={() => Router.push('/recordings')}
        />
        <HomeCard 
            img = '/icons/join-meeting.svg'
            className = 'bg-yellow-1'
            title='Join Meeting'
            description='Via invitation link.'
            handleClick={() => seTMeetingState('isJoiningMeeting')}
        />

        <MeetingModel 
            isOpen = {meetingState === 'isInstantMeeting'}
            onClose = {() => seTMeetingState(undefined)}
            title='Start an instant meeting'
            className='text-center'
            buttonText='Start Meeting'
            handleClick={createMeeting}
        />
    </section>
  )
}

export default MeetingTypeList;