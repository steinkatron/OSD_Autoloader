// content.js
//alert("Hello from your Chrome extension!")

// Logging URL
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);

// Listen for message passing
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);