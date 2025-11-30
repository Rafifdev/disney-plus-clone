import Sidebar from "./sidebar";
import Page from "./pages";
import { useOutlet } from "react-router-dom";
import useAuth from "../../hooks/useAtuh";
import useAuthState from "../../hooks/useAuthState";

function Layout() {
  const outlet = useOutlet();
  const user = useAuthState();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <Sidebar onLogout={handleLogout} user={user} />
      <Page>{outlet}</Page>
    </div>
  );
}

export default Layout;
