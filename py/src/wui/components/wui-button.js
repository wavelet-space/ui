
/**
 *
 * @param {string} name
 * @returns
 */
function log(name) {
    return function decorator(t, n, descriptor) {
        const original = descriptor.value;
        if (typeof original === 'function') {
        descriptor.value = function(...args) {
            console.log(`Arguments for ${name}: ${args}`);
            try {
            const result = original.apply(this, args);
            console.log(`Result from ${name}: ${result}`);
            return result;
            } catch (e) {
            console.log(`Error from ${name}: ${e}`);
            throw e;
            }
        }
        }
        return descriptor;
    };
}


/**
 * Button with basic look.
 */
export class Button extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' }); // open

        this.text = 'Submit';
        this.button = this.querySelector('button');

        shadow.innerHTML = `
            <style>
                button.wui {
                    color: white;
                    background-color: rgb(7, 114, 255);
                    border: 1px solid black;
                    padding: 1em;
                    border-radius: 2px;
                }
            </style>

            <button class="wui">${this.text}</button>
        `
    }

    // @log("button")
    connectedCallback() {
        console.log(`<${this.constructor.name}> component connected.`);
    }

    disconnectedCallback() {
        console.log(`<${this.constructor.name}> component disconnected.`);
    }

    adoptedCallback() {
        console.log('Custom element adopted.');
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue != newValue) {
            console.log(`<${this.constructor.name}> component attribute changed.`);
            this[property] = newValue;
      }
    }

    static get observedAttributes() { return ['text']; }
}



export class DemoButton extends HTMLElement {
    constructor() {
      super();

      // const shadow = this.attachShadow({ mode: 'open' });

      const template = document.createElement("wui-button-template");

      template.innerHTML = `
      <style>
        color: white;
        background: blue;
        font: 3em;
      </style>
      <button>
        <span>Submit</span>
      </button>`;

      this.appendChild(template);

      this.button = this.querySelector('button');
      this.updateText = this.updateText.bind(this);
    }

    connectedCallback() {
      if (this.hasAttribute('text')) {
          this.updateText();
      }
    }

    updateText() {
      let buttonSpan = this.button.querySelector('span');
      buttonSpan.innerText = this.getAttribute('text');
    }
  }
