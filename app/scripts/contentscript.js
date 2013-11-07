"use strict";

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "NEW_SONG")) {
    chrome.runtime.sendMessage({data: event.data.song});
  }
}, false);

// Inject the inject.js file
var s = document.createElement('script');
s.src = chrome.extension.getURL("scripts/inject/xbox-events.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);




