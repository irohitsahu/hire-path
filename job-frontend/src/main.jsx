import ReactDOM from "react-dom/client";
import { MaterialUIControllerProvider } from "./context";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
);
