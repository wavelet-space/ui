

// Create a class for the element
export class WordCount extends HTMLParagraphElement {
    constructor() {
      super();

      // count words in element's parent element
      const wcParent = this.parentNode;

      function countWords(node){
        const text = node.innerText || node.textContent;
        return text.trim().split(/\s+/g).filter((a) => a.trim().length > 0).length;
      }

      const count = `Words: ${countWords(wcParent)}`;

      const shadow = this.attachShadow({mode: 'open'});

      // Create text node and add word count to it
      const text = document.createElement('span');
      text.textContent = count;

      // Append it to the shadow root
      shadow.appendChild(text);

      // Update count when element content changes
      setInterval(() => {
        const count = `Words: ${countWords(wcParent)}`;
        text.textContent = count;
      }, 200);
    }
  }