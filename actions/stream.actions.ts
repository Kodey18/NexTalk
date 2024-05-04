"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async() => {
    const user = await currentUser();

    if(!user){
        throw new Error(`User is not logged in .`);
    }

    if(!apiKey){
        throw new Error(`No api key.`);
    }

    if(!apiSecret){
        throw new Error(`No api secret.`);
    }

    const serverClient = new StreamClient(apiKey, apiSecret);

    // exp is optional (by default the token is valid for an hour)
    const expire = Math.floor(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(new Date().getTime()/ 1000) - 60;

    const token = serverClient.createToken(user.id, expire, issued);

    return token;
}