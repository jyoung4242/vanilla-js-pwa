import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";

const model = {
  fetchGreeting: () => {
    rpcFetchGreeting();
  },
};

const template = `<div>
    <section class="main">
        <h1>Recipe App</h1>
        <p>The best culinary treats</p>
        <button \${click @=> fetchGreeting}>Explore</button>
    </section>

</div>`;

UI.create(document.body, model, template);

const serverIP = "192.168.68.66";
const serverPort = 3000;

async function rpcFetchGreeting() {
  try {
    const response = await fetch(`http://${serverIP}:${serverPort}/`);
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.text();
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Error connecting to server:", error);
  }
}
