// Set up a MutationObserver to listen for changes in the DOM
import {throttleFindVideoTags} from "./contentScript.js";

export function createVideoObserver() {
    throttleFindVideoTags();

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
};
