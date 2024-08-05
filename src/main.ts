import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Assets } from "@peasy-lib/peasy-assets";
import { Input } from "@peasy-lib/peasy-input";
const model = {};

const template = `<div>
    <section class="main">
        <h1>Recipe App</h1>
        <p>The best culinary treats</p>
        <button>Explore</button>
    </section>

</div>`;

UI.create(document.body, model, template);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

console.log(`Hello World`);
