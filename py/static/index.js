
import { Button } from "../src/wui/components/wui-button.js"
import { WordCount } from "../src/wui/components/wui-wordcount.js";
import { TimeFormatted } from "../src/wui/components/wui-datetime.js";

window.customElements.define('wui-button', Button);

customElements.define('wui-wordcount', WordCount, { extends: 'p' });
customElements.define("time-formatted", TimeFormatted);