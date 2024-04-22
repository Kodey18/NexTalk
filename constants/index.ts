/*
The constant folder and this file will be used for storing the data like links array, iconUrls url array and all that stuff. This will help us by not clutering our other files.
*/
export const sideBarLinks = [
    {
        label : 'Home',  // Sidebar menu item title
        route : '/',   // route for the link to be directed to when clicked on this menu item.
        iconUrl : '/icons/Home.svg',
    },
    {
        label: "Upcoming",
        route: "/upcoming",
        iconUrl: "/icons/upcoming.svg",
    },
    {
        label: "Previous",
        route: "/previous",
        iconUrl: "/icons/previous.svg",
    },
    {
        label: "Recordings",
        route: "/recordings",
        iconUrl: "/icons/recordings.svg",
    },
    {
        label: "Personal Room",
        route : "/personal-room",
        iconUrl : "/icons/add-personal.svg",
    },
];