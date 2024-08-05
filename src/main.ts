import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";

const version = "1.0.0";

const model = {
  fetchGreeting: () => {
    rpcFetchGreeting();
  },
};

const template = `<div>
    <section class="main">
        <h1>my PWA App </h1>
        <p>v${version}</p>
        <button \${click @=> fetchGreeting}>Explore</button>
    </section>

</div>`;

UI.create(document.body, model, template);

const serverIP = "192.168.68.66";
const serverPort = 3000;

async function rpcFetchGreeting() {
  try {
    const response = await fetch(`http://${serverIP}:${serverPort}`, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.text();
    window.alert(`Response from server: ${data}`);
  } catch (error) {
    window.alert(`Error connecting to server: ${error}`);
  }
}
