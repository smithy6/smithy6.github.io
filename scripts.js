// Get the user agent string
var userAgent = navigator.userAgent;

// Check if the device is a mobile device
if (userAgent.match(/Android/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i)) {
    // Set the viewport meta tag for mobile devices
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "width=device-width, initial-scale=1.0");

    // Add a class to the body element to indicate that it's a mobile device
    document.body.classList.add("mobile");
}