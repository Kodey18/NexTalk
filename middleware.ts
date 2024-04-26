import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/*
Here we can also define the protected routes. Protected routes are basically  any route that requires user authentication to access them.
*/
const protectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',

    /* 
    Here "(.*)" means match all the sub routes that contain meetings route
    */
    '/meetings(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if(protectedRoutes(req)) {
        auth().protect();
    }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};