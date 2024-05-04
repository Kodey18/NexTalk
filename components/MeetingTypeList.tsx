"use client";

import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModel from './MeetingModel';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

const MeetingTypeList = () => {
    const Router = useRouter();
    const user = useUser();
    const client = useStreamVideoClient();
    const [callDetails, setCallDestails] = useState<Call>();
    const [values, setValues] = useState({
        dateTime: new Date(),
        description : '',
        link: ''
    });

    const createMeeting = async() => {
        if(!client || !user){
            return;
        }

        try{
            console.log('clicked');
            const id = crypto.randomUUID();
            const call = client.call('default', id);

            if(!call) throw new Error('Failed to create call')

            const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description = values.description || 'Instant meeting';

            await call.getOrCreate({
                data:{
                    starts_at : startsAt,
                    custom:{
                        description: description
                    }
                }
            });

            setCallDestails(call);

            if(!values.description){
                console.log("working");
                Router.push(`/meetings/${call.id}`)
            }
        }catch(err){
            console.log('Error creating meeting', err);
        }
    }

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