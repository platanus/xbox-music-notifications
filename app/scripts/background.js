'use strict';

var notification, timeout;

function showNotification(song){

    if(notification){
        if(timeout){
            clearTimeout(timeout);
        }
        closeNotification();
    }

    // Create a simple text notification:
    notification = webkitNotifications.createNotification(
      song.picture,
      song.title,
      song.artist + " - " + song.album
      );

    // Then show the notification.
    notification.show();

    // Close the notification after 10 seconds
    timeout = setTimeout(closeNotification, 10000);
}

function closeNotification(){
    if(notification){
        notification.cancel();
        notification = undefined;
    }
}

// Listen for a message from the contentscript
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    showNotification(request.data);
});



