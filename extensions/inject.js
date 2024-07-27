const scriptEl = document.createElement("script");
scriptEl.type = "module";
scriptEl.src = chrome.runtime.getURL("dist/contentScript.js");
document.body.appendChild(scriptEl);
