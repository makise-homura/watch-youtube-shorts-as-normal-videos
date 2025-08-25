// ==UserScript==
// @name     Watch Youtube shorts as normal videos
// @version  2.2
// @grant    none
// @author   makise-homura
// @author   bakatrouble
// @match    https://www.youtube.com/*
// @run-at   document-start
// ==/UserScript==

function replaceLocation()
{
    if (window.location.toString().includes('/shorts/'))
    {
        window.location.replace(window.location.toString().replace('/shorts/','/watch?v='))
    }
}

// In case we opened a new page
replaceLocation();

// See https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
var oldHref = document.location.href;

window.onload = function()
{
    var bodyList = document.querySelector("body")

    var observer = new MutationObserver(function(mutations)
    {
        mutations.forEach(function(mutation)
        {
            if (oldHref != window.location.toString())
            {
                oldHref = window.location.toString();

                // In case we just changed an URL of existing page
                replaceLocation();
            }
        });
    });

    var config =
    {
        childList: true,
        subtree: true
    };

    observer.observe(bodyList, config);

    setInterval(() => {
        document.querySelectorAll('a').forEach(el => {
            if (el.href.includes('/shorts/')) {
                el.href = el.href.replace('/shorts/', '/watch?v=');
            }
        });
    }, 1000);
};
