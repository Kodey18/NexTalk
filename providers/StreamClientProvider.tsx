'use client';

import { tokenProvider } from '@/actions/stream.actions';
import { useUser } from '@clerk/nextjs';
import {
    StreamVideo,
    StreamVideoClient,
} from '@stream-io/video-react-sdk';
import Loader from '@/components/Loader';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({children} : {children : ReactNode}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();

    /*
    Here "user" and "isLoaded" are the fields present in the useUser() which is coming from the  "@clerk/nextjs" package. This bascially checks i there is a user signed-in ora user already loaded if yes then we'll use the useeffect for creating and initialising the connection for the meeting.
    */
    const {user, isLoaded} = useUser();

    useEffect(() => {
        if(!user || !isLoaded) return;
        if (!apiKey) throw new Error('Stream api key missing.');

        /*
        After making sure of user and apikey we'll create a client
        */
        const client = new StreamVideoClient({
            apiKey,
            user : {
                /*
                Here the user from which were fields are being accessed is coming from the useUser() from clerk.
                */
                id : user?.id,
                name : user?.username || user?.id,
                image : user?.imageUrl,
            },
            tokenProvider,
        })

        setVideoClient(client);
    }, [user, isLoaded]);

    if(!videoClient) return <Loader />

    return (
        <StreamVideo client={videoClient}>
            {/* Here when client will be accessing videoclient while be rendered off for the first time then there won't be a videoClient yet because the useEffect is yet to be executed. Therefore we need an loader function to load the videoClient by giving time for execution of useEffect to fetch client.  */}
            {children}
        </StreamVideo>
    );
};

export default StreamVideoProvider;