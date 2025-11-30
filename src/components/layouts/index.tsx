import Sidebar from "./sidebar";
import Page from "./pages";
import { useOutlet } from "react-router-dom";

function Layout() {
  const outlet = useOutlet()
  return (
    <div>
      <Sidebar />
      <Page>{outlet}</Page>
    </div>
  );
}

export default Layout;
