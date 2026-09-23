import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.css";

// No <React.StrictMode>: the workbench always runs on the dev server (export goes through it too); StrictMode would mount every
// Remotion Player / thumbnail twice, flashing a dozen-plus 1080p scenes on first paint — the user just sees "flashing".
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
