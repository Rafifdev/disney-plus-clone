import { RouterProvider } from "react-router-dom";
import WebRouter from "./Router";
import "./index.css";
import "./firebase"

function App() {
  return <RouterProvider router={WebRouter} />;
}

export default App;
