// chrome.action.onClicked.addListener(async function (activeTab) {
//     await chrome.scripting.executeScript({
//         target: {tabId: activeTab.id},
//         files: ['./eject.js'],
//     });
// });

const state = {
    loaded: {},
    injected: {},
}

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    if (tab.url.includes('chrome://')) {
        console.log('can`t run on start page')
        return;
    }

    // if (state.loaded[tabId] && state.injected[tabId]) {
    //     return;
    // }

    await Promise.all([
        chrome.scripting.executeScript({
            target: {tabId},
            files: ['./inject.js'],
        })
        ,
        chrome.scripting.insertCSS({
            target: {tabId},
            files: ['dist/bundle.css'],
        })
    ])

    state.loaded[tabId] = true
    state.injected[tabId] = true
})
