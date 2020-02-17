
export class PostUtils {

    /**
     * Get post without HTML tags
     * @param content content for which to remove HTML strings
     */
    static getHTMLRemovedText(content: string): string {

        // Create a new div element
        var temporaryElement = document.createElement("div");

        // Set the HTML content with the providen
        temporaryElement.innerHTML = content;

        // Retrieve the text property of the element (cross-browser support)
        return temporaryElement.textContent || temporaryElement.innerText || "";
    }
}

