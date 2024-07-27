import {throttle} from "lodash-es";

// Function to find video tags
function findVideoTags() {
    const videos = document.querySelectorAll('video:not([data-detect-flag])');

    if(!videos.length) {
        return;
    }

    console.log(`Found ${videos.length} video tag(s) on this page.`);
    videos.forEach((video, index) => {
        console.log(`Video ${index + 1}:`, video);

        video.setAttribute('data-detect-flag', 'true');
        video.style.border = '1px solid red';
    });
}

const throttleFindVideoTags = throttle(findVideoTags, 1000);

// Initial check for video tags when the script is first loaded
throttleFindVideoTags();

// Set up a MutationObserver to listen for changes in the DOM
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            throttleFindVideoTags();
        }
    }
});

// Configure the observer to watch for changes in the document
observer.observe(document.body, {
    childList: true,
    attributes: true,
    subtree: true
});
