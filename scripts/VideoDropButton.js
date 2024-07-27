// Create a class for the element
class VideoDropButton extends HTMLButtonElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.innerHTML = "<button>edit</button>";
    }
}

// Define the new element
customElements.define('video-drop-button', VideoDropButton, );
