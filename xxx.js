function displayNotification() 
{
    if (window.Notification && Notification.permission === "granted") 
    {
        notification();
    }
}

function notification() 
{
    const options = 
    {
        body: "Testing Our Notification",
        icon: "./bell.png"
    };
    swRegistration.showNotification("PWA Notification!", options);
}