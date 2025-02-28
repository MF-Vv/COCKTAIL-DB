import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </>
)
