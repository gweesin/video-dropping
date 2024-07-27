import {throttle} from "lodash-es";
import {computePosition, autoUpdate} from '@floating-ui/dom'

/**
 *
 * @param {Element} referenceNode
 * @return {HTMLElement}
 */
async function createVideoDropButton(referenceNode) {
    const videoDropButtonEl = document.createElement('video-drop-button');
    videoDropButtonEl.textContent = 'Edit';

    document.body.appendChild(videoDropButtonEl);

    autoUpdate(referenceNode, videoDropButtonEl, async () => {
        const { x, y, strategy, middlewareData, placement } = await computePosition(referenceNode, videoDropButtonEl, {
            placement: 'bottom-end',
            strategy: 'fixed',
        });

        Object.assign(videoDropButtonEl.style, {
            position: strategy,
            left: `${x}px`,
            top: `${y}px`
        })
    })

    return videoDropButtonEl;
}

// Function to find video tags
function findVideoTags() {
    const videos = document.querySelectorAll('video:not([data-detect-flag])');

    if (!videos.length) {
        return;
    }

    console.log(`Found ${videos.length} video tag(s) on this page.`);
    videos.forEach((video, index) => {
        console.log(`Video ${index + 1}:`, video);

        video.setAttribute('data-detect-flag', 'true');
        video.style.border = '1px solid red';
        console.log('video', video);

        createVideoDropButton(video);
    });
}

export const throttleFindVideoTags = throttle(findVideoTags, 1000);
